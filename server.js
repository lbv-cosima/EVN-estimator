const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// ============================================================================
// 1. HEALTH CHECK: KIỂM TRA KẾT NỐI DATABASE
// ============================================================================
app.get('/api/health', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT 1 + 1 AS test_connection');
    const [tables] = await db.query('SHOW TABLES;');
    res.json({
      status: 'success',
      message: 'Kết nối MySQL thành công rực rỡ!',
      database: process.env.DB_NAME || 'electricitybills',
      tableCount: tables.length,
      tables: tables.map(t => Object.values(t)[0])
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Chưa kết nối được với MySQL. Hãy kiểm tra lại mật khẩu root trong file backend/.env!',
      errorCode: err.code,
      errorDetails: err.message
    });
  }
});

// ============================================================================
// 2. API TRA CỨU & TÌM KIẾM THIẾT BỊ (SEARCH CATALOG)
// ============================================================================
app.get('/api/appliances', async (req, res) => {
  try {
    const sql = `
      SELECT 
        a.id,
        a.device_name AS name,
        IFNULL(b.brand_name, 'Hãng khác') AS brand,
        a.model_code AS model,
        a.category_code,
        IFNULL(c.category_name, 'Thiết bị') AS category,
        a.power_watts AS powerWatts,
        a.standby_watts AS standbyWatts,
        a.is_inverter AS isInverter,
        a.energy_stars AS energyStars,
        a.capacity_spec AS capacitySpec,
        a.suggested_hours AS hoursPerDay,
        a.suggested_load_factor AS loadFactor,
        a.suggested_room AS room,
        a.image_url AS imageUrl,
        a.note
      FROM appliances a
      LEFT JOIN brands b ON a.brand_id = b.id
      LEFT JOIN appliance_categories c ON a.category_code = c.category_code
      WHERE a.is_active = 1
      ORDER BY a.id ASC;
    `;
    const [rows] = await db.query(sql);
    res.json(rows);
  } catch (err) {
    console.error('Lỗi lấy danh sách thiết bị:', err);
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu', details: err.message });
  }
});

app.get('/api/appliances/search', async (req, res) => {
  const query = (req.query.q || '').trim();

  try {
    if (!query) {
      const sqlAll = `
        SELECT 
          a.id,
          a.device_name AS name,
          IFNULL(b.brand_name, 'Hãng khác') AS brand,
          a.model_code AS model,
          a.category_code,
          IFNULL(c.category_name, 'Thiết bị') AS category,
          a.power_watts AS powerWatts,
          a.standby_watts AS standbyWatts,
          a.is_inverter AS isInverter,
          a.energy_stars AS energyStars,
          a.capacity_spec AS capacitySpec,
          a.suggested_hours AS hoursPerDay,
          a.suggested_load_factor AS loadFactor,
          a.suggested_room AS room,
          a.image_url AS imageUrl,
          a.note
        FROM appliances a
        LEFT JOIN brands b ON a.brand_id = b.id
        LEFT JOIN appliance_categories c ON a.category_code = c.category_code
        WHERE a.is_active = 1
        ORDER BY a.id ASC
        LIMIT 30;
      `;
      const [rows] = await db.query(sqlAll);
      return res.json(rows);
    }

    const searchPattern = `%${query.toLowerCase()}%`;
    
    // Tìm kiếm trong bảng appliances kết hợp brands và categories
    const sql = `
      SELECT 
        a.id,
        a.device_name AS name,
        IFNULL(b.brand_name, 'Hãng khác') AS brand,
        a.model_code AS model,
        a.category_code,
        IFNULL(c.category_name, 'Thiết bị') AS category,
        a.power_watts AS powerWatts,
        a.standby_watts AS standbyWatts,
        a.is_inverter AS isInverter,
        a.energy_stars AS energyStars,
        a.capacity_spec AS capacitySpec,
        a.suggested_hours AS hoursPerDay,
        a.suggested_load_factor AS loadFactor,
        a.suggested_room AS room,
        a.image_url AS imageUrl,
        a.note
      FROM appliances a
      LEFT JOIN brands b ON a.brand_id = b.id
      LEFT JOIN appliance_categories c ON a.category_code = c.category_code
      WHERE a.is_active = 1
        AND (
          LOWER(a.device_name) LIKE ? 
          OR LOWER(a.model_code) LIKE ?
          OR LOWER(b.brand_name) LIKE ?
          OR LOWER(c.category_name) LIKE ?
        )
      LIMIT 20;
    `;

    const [rows] = await db.query(sql, [
      searchPattern,
      searchPattern,
      searchPattern,
      searchPattern
    ]);

    res.json(rows);

  } catch (err) {
    console.error('Lỗi tìm kiếm thiết bị:', err);
    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu', details: err.message });
  }
});

// ============================================================================
// 3. API LẤY DANH MỤC THIẾT BỊ (CATEGORIES)
// ============================================================================
app.get('/api/categories', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM appliance_categories ORDER BY sort_order ASC;');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ============================================================================
// 4. API LẤY BIỂU GIÁ ĐIỆN EVN HIỆN HÀNH (CURRENT TARIFF & TIERS)
// ============================================================================
app.get('/api/tariffs/current', async (req, res) => {
  try {
    const [tariffRows] = await db.query(
      'SELECT * FROM electricity_tariffs WHERE is_active = 1 ORDER BY effective_from DESC LIMIT 1;'
    );
    if (tariffRows.length === 0) {
      return res.status(404).json({ error: 'Chưa có biểu giá điện nào trong hệ thống' });
    }
    const tariff = tariffRows[0];
    const [tiers] = await db.query(
      'SELECT * FROM tariff_tiers WHERE tariff_id = ? ORDER BY tier_order ASC;',
      [tariff.id]
    );
    res.json({
      tariff,
      tiers
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ============================================================================
// 5. KHỞI CHẠY MÁY CHỦ EXPRESS
// ============================================================================
app.listen(PORT, () => {
  console.log('='.repeat(60));
  console.log(`🚀 BACKEND API ĐANG CHẠY TẠI: http://localhost:${PORT}`);
  console.log(`👉 Kiểm tra kết nối DB: http://localhost:${PORT}/api/health`);
  console.log(`👉 Tìm kiếm thử: http://localhost:${PORT}/api/appliances/search?q=daikin`);
  console.log('='.repeat(60));
});
