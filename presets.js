/**
 * presets.js - Thư viện thiết bị điện gia đình Việt Nam & Công cụ tra cứu thông số thông minh
 */

const APPLIANCE_PRESETS = [
  // --- 1. ĐIỀU HÒA & LÀM MÁT ---
  {
    category: 'cooling',
    categoryName: 'Điều hòa & Quạt mát',
    icon: 'wind',
    items: [
      {
        name: 'Điều hòa Daikin 1.0 HP (9.000 BTU) Inverter',
        brand: 'Daikin',
        model: 'FTKB25WAVMV',
        powerWatts: 820,
        isInverter: true,
        hoursPerDay: 8,
        daysPerMonth: 30,
        loadFactor: 0.55,
        room: 'Phòng ngủ nhỏ (< 15m²)',
        note: 'Dòng Inverter tiết kiệm điện tiêu chuẩn, chạy duy trì ~300-500W',
        keywords: ['daikin', 'dieu hoa', 'may lanh', '1hp', '1 ngua', '9000 btu', 'inverter', 'ftkb25']
      },
      {
        name: 'Điều hòa Daikin 1.5 HP (12.000 BTU) Inverter',
        brand: 'Daikin',
        model: 'FTKB35WAVMV',
        powerWatts: 1100,
        isInverter: true,
        hoursPerDay: 8,
        daysPerMonth: 30,
        loadFactor: 0.55,
        room: 'Phòng ngủ lớn / Phòng khách (15 - 20m²)',
        note: 'Dòng 1.5 ngựa Inverter cho phòng vừa và lớn',
        keywords: ['daikin', 'dieu hoa', 'may lanh', '1.5hp', '1.5 ngua', '12000 btu', 'inverter', 'ftkb35']
      },
      {
        name: 'Điều hòa Panasonic 1.0 HP Inverter',
        brand: 'Panasonic',
        model: 'CU/CS-PU9XKH-8M',
        powerWatts: 800,
        isInverter: true,
        hoursPerDay: 8,
        daysPerMonth: 30,
        loadFactor: 0.54,
        room: 'Phòng ngủ (< 15m²)',
        note: 'Công nghệ Nanoe-G lọc bụi mịn, Eco Inverter A.I',
        keywords: ['panasonic', 'dieu hoa', 'may lanh', '1hp', '9000 btu', 'inverter', 'nanoe']
      },
      {
        name: 'Điều hòa Panasonic 1.5 HP Inverter',
        brand: 'Panasonic',
        model: 'CU/CS-XPU12XKH-8',
        powerWatts: 1070,
        isInverter: true,
        hoursPerDay: 8,
        daysPerMonth: 30,
        loadFactor: 0.55,
        room: 'Phòng khách / Phòng ngủ lớn',
        note: 'Làm lạnh nhanh iAUTO-X, Nanoe-X kháng khuẩn',
        keywords: ['panasonic', 'dieu hoa', 'may lanh', '1.5hp', '12000 btu', 'inverter', 'xpu12']
      },
      {
        name: 'Điều hòa Casper 1.0 HP Inverter giá phổ thông',
        brand: 'Casper',
        model: 'TC-09IS35 Inverter',
        powerWatts: 850,
        isInverter: true,
        hoursPerDay: 8,
        daysPerMonth: 30,
        loadFactor: 0.58,
        room: 'Phòng ngủ (< 15m²)',
        note: 'I-Saving Inverter, làm lạnh nhanh Turbo',
        keywords: ['casper', 'dieu hoa', 'may lanh', '1hp', '9000 btu', 'inverter', 'tc09']
      },
      {
        name: 'Điều hòa LG 1.5 HP Dual Inverter',
        brand: 'LG',
        model: 'V13WIN Inverter',
        powerWatts: 1040,
        isInverter: true,
        hoursPerDay: 8,
        daysPerMonth: 30,
        loadFactor: 0.56,
        room: 'Phòng ngủ / Phòng khách',
        note: 'Dual Inverter máy nén kép tiết kiệm điện đến 70%',
        keywords: ['lg', 'dieu hoa', 'may lanh', '1.5hp', '12000 btu', 'dual inverter', 'v13win']
      },
      {
        name: 'Điều hòa cơ 1.0 HP (Không Inverter)',
        brand: 'Funiki / Nagakawa',
        model: 'HSC09TMU',
        powerWatts: 900,
        isInverter: false,
        hoursPerDay: 8,
        daysPerMonth: 30,
        loadFactor: 0.85,
        room: 'Phòng trọ / Phòng ngủ',
        note: 'Máy cơ đóng ngắt lốc liên tục, tiêu hao điện hơn dòng Inverter',
        keywords: ['funiki', 'nagakawa', 'dieu hoa co', 'khong inverter', 'may lanh 1hp']
      },
      {
        name: 'Quạt đứng / Quạt cây Senko',
        brand: 'Senko',
        model: 'DR1608 / DH16',
        powerWatts: 55,
        isInverter: false,
        hoursPerDay: 10,
        daysPerMonth: 30,
        loadFactor: 0.95,
        room: 'Phòng khách / Phòng ngủ',
        note: 'Quạt cây 3 cấp tốc độ gió tiêu chuẩn gia đình',
        keywords: ['senko', 'quat cay', 'quat dung', 'quat gio', 'quat dien']
      },
      {
        name: 'Quạt đứng Mitsubishi Inverter',
        brand: 'Mitsubishi',
        model: 'LV16-RV',
        powerWatts: 50,
        isInverter: false,
        hoursPerDay: 10,
        daysPerMonth: 30,
        loadFactor: 0.90,
        room: 'Phòng khách / Phòng ngủ',
        note: 'Động cơ vỏ kín bạc đạn êm ái, độ bền cao',
        keywords: ['mitsubishi', 'quat mitsubishi', 'quat dung', 'lv16']
      },
      {
        name: 'Quạt trần 5 cánh Panasonic Inverter',
        brand: 'Panasonic',
        model: 'F-60TAN (Động cơ DC)',
        powerWatts: 40,
        isInverter: true,
        hoursPerDay: 12,
        daysPerMonth: 30,
        loadFactor: 0.80,
        room: 'Phòng khách',
        note: 'Động cơ DC Inverter siêu tiết kiệm điện, gió tự nhiên 1/f Yuragi',
        keywords: ['panasonic', 'quat tran', 'dong co dc', 'inverter', 'f60tan']
      },
      {
        name: 'Quạt điều hòa hơi nước Sunhouse',
        brand: 'Sunhouse',
        model: 'SHD7746 (Bình 45L)',
        powerWatts: 180,
        isInverter: false,
        hoursPerDay: 6,
        daysPerMonth: 30,
        loadFactor: 0.90,
        room: 'Phòng khách / Gian mở',
        note: 'Làm mát bằng hơi nước tấm làm mát công suất trung bình',
        keywords: ['sunhouse', 'quat dieu hoa', 'quat hoi nuoc', 'shd7746']
      }
    ]
  },

  // --- 2. TỦ LẠNH & BẢO QUẢN ---
  {
    category: 'fridge',
    categoryName: 'Tủ lạnh & Tủ đông',
    icon: 'refrigerator',
    items: [
      {
        name: 'Tủ lạnh Panasonic 2 cánh Inverter (255 Lít)',
        brand: 'Panasonic',
        model: 'NR-TV261 (255L)',
        powerWatts: 150,
        isInverter: true,
        hoursPerDay: 24,
        daysPerMonth: 30,
        loadFactor: 0.24,
        room: 'Nhà bếp',
        note: 'Công nghệ Econavi & Inverter, cảm biến nhiệt độ thông minh',
        keywords: ['panasonic', 'tu lanh', '2 canh', '255l', 'inverter', 'econavi']
      },
      {
        name: 'Tủ lạnh Samsung Inverter 2 cánh (236 Lít)',
        brand: 'Samsung',
        model: 'RT22FARBDSA (236L)',
        powerWatts: 140,
        isInverter: true,
        hoursPerDay: 24,
        daysPerMonth: 30,
        loadFactor: 0.25,
        room: 'Nhà bếp',
        note: 'Digital Inverter, khay Cool Pack giữ lạnh 8 tiếng khi mất điện',
        keywords: ['samsung', 'tu lanh', '2 canh', '236l', 'digital inverter']
      },
      {
        name: 'Tủ lạnh LG Inverter Smart Inverter (315 Lít)',
        brand: 'LG',
        model: 'GN-M312BL (315L)',
        powerWatts: 160,
        isInverter: true,
        hoursPerDay: 24,
        daysPerMonth: 30,
        loadFactor: 0.25,
        room: 'Nhà bếp',
        note: 'DoorCooling+ làm lạnh từ cánh tủ, Inverter tiết kiệm điện',
        keywords: ['lg', 'tu lanh', '315l', 'doorcooling', 'smart inverter']
      },
      {
        name: 'Tủ lạnh Side by Side 4 cánh Hitachi / Samsung (550L+)',
        brand: 'Hitachi / Samsung',
        model: 'Side by Side Multi Door',
        powerWatts: 240,
        isInverter: true,
        hoursPerDay: 24,
        daysPerMonth: 30,
        loadFactor: 0.32,
        room: 'Nhà bếp lớn',
        note: 'Dung tích khủng 500-650L, làm đá tự động, tiêu thụ ~1.4 - 1.8 số điện/ngày',
        keywords: ['hitachi', 'samsung', 'tu lanh 4 canh', 'side by side', '500l', '600l']
      },
      {
        name: 'Tủ đông mini trữ sữa / thực phẩm Sanaky (150L)',
        brand: 'Sanaky',
        model: 'VH-1599HY (150L)',
        powerWatts: 120,
        isInverter: false,
        hoursPerDay: 24,
        daysPerMonth: 30,
        loadFactor: 0.40,
        room: 'Nhà bếp / Ban công',
        note: 'Dàn đồng làm lạnh sâu -18°C',
        keywords: ['sanaky', 'tu dong', 'tru sua', '150l', 'dong lanh']
      },
      {
        name: 'Tủ lạnh mini sinh viên / khách sạn (90 Lít)',
        brand: 'Aqua / Beko',
        model: 'AQR-D99FA (93L)',
        powerWatts: 70,
        isInverter: false,
        hoursPerDay: 24,
        daysPerMonth: 30,
        loadFactor: 0.35,
        room: 'Phòng trọ / Khách sạn',
        note: 'Tủ nhỏ 1 cánh, công suất thấp ~0.6 số điện/ngày',
        keywords: ['aqua', 'tu lanh mini', 'phong tro', '90l', 'beko']
      }
    ]
  },

  // --- 3. BẾP & NẤU NƯỚNG ---
  {
    category: 'kitchen',
    categoryName: 'Nhà bếp & Nấu nướng',
    icon: 'utensils',
    items: [
      {
        name: 'Nồi chiên không dầu Philips (4.1 Lít)',
        brand: 'Philips',
        model: 'HD9252 / HD9200 (4.1L)',
        powerWatts: 1400,
        isInverter: false,
        hoursPerDay: 0.4,
        daysPerMonth: 22,
        loadFactor: 0.80,
        room: 'Nhà bếp',
        note: 'Công nghệ Rapid Air chiên nướng giòn không cần dầu',
        keywords: ['philips', 'noi chien', 'noi chien khong dau', 'hd9252', 'air fryer']
      },
      {
        name: 'Nồi chiên không dầu dung tích lớn Lock&Lock (5.2L)',
        brand: 'Lock&Lock',
        model: 'EJF357BLK (5.2L)',
        powerWatts: 1800,
        isInverter: false,
        hoursPerDay: 0.4,
        daysPerMonth: 20,
        loadFactor: 0.85,
        room: 'Nhà bếp',
        note: 'Công suất nướng lớn 1800W cho thực phẩm nguyên con',
        keywords: ['lock&lock', 'lock and lock', 'noi chien', '5.2l', '1800w']
      },
      {
        name: 'Bếp từ đôi Sunhouse (2 vùng nấu)',
        brand: 'Sunhouse',
        model: 'SHB9101 / MMB888',
        powerWatts: 2000,
        isInverter: true,
        hoursPerDay: 1.2,
        daysPerMonth: 30,
        loadFactor: 0.70,
        room: 'Nhà bếp',
        note: 'Mâm từ đôi Inverter gia nhiệt nhanh, tổng công suất cực đại 3600W-4000W',
        keywords: ['sunhouse', 'bep tu', 'bep tu doi', 'shb9101', 'bep tu inverter']
      },
      {
        name: 'Bếp từ đôi Bosch / Hafele nhập khẩu',
        brand: 'Bosch / Hafele',
        model: 'PPI82560MS',
        powerWatts: 2200,
        isInverter: true,
        hoursPerDay: 1.2,
        daysPerMonth: 30,
        loadFactor: 0.70,
        room: 'Nhà bếp',
        note: 'Mặt kính Schott Ceran cao cấp, đun nấu siêu nhanh',
        keywords: ['bosch', 'hafele', 'bep tu doi', 'schott ceran', 'ppi82560ms']
      },
      {
        name: 'Bếp từ đơn ăn lẩu / phụ Sunhouse',
        brand: 'Sunhouse / Kangaroo',
        model: 'SHD6149 (Bếp đơn)',
        powerWatts: 2000,
        isInverter: false,
        hoursPerDay: 0.5,
        daysPerMonth: 10,
        loadFactor: 0.85,
        room: 'Nhà bếp / Bàn ăn',
        note: 'Bếp đơn cơ động ăn lẩu, nấu nhanh',
        keywords: ['sunhouse', 'bep tu don', 'bep an lau', 'bep dien']
      },
      {
        name: 'Nồi cơm điện tử Toshiba (1.8 Lít)',
        brand: 'Toshiba',
        model: 'RC-18NMFVN (1.8L)',
        powerWatts: 800,
        isInverter: false,
        hoursPerDay: 1.0,
        daysPerMonth: 30,
        loadFactor: 0.60,
        room: 'Nhà bếp',
        note: 'Lòng nồi gang truyền nhiệt dày 4mm, nấu cơm dẻo và giữ ấm 12 tiếng',
        keywords: ['toshiba', 'noi com', 'noi com dien tu', 'rc18nmf', '1.8l']
      },
      {
        name: 'Nồi cơm điện cao tần Cuckoo Hàn Quốc (1.8L)',
        brand: 'Cuckoo',
        model: 'CRP-LHTR1010FB (IH Cao tần)',
        powerWatts: 1455,
        isInverter: true,
        hoursPerDay: 0.8,
        daysPerMonth: 30,
        loadFactor: 0.65,
        room: 'Nhà bếp',
        note: 'Nấu áp suất cao tần IH chín hạt gạo từ trong ra ngoài',
        keywords: ['cuckoo', 'noi com cao tan', 'noi com han quoc', 'ih']
      },
      {
        name: 'Ấm siêu tốc Inox Sunhouse / Philips',
        brand: 'Sunhouse / Philips',
        model: 'SHD1353 / HD9306 (1.7L)',
        powerWatts: 1800,
        isInverter: false,
        hoursPerDay: 0.25,
        daysPerMonth: 30,
        loadFactor: 1.0,
        room: 'Nhà bếp',
        note: 'Đun nước sôi nhanh 3-5 phút, công suất tức thời lớn',
        keywords: ['sunhouse', 'philips', 'am sieu toc', 'am dun nuoc', 'binh dun']
      },
      {
        name: 'Lò vi sóng có nướng Sharp (23 Lít)',
        brand: 'Sharp',
        model: 'R-G222VN-S (23L)',
        powerWatts: 1270,
        isInverter: false,
        hoursPerDay: 0.2,
        daysPerMonth: 30,
        loadFactor: 0.85,
        room: 'Nhà bếp',
        note: 'Vi sóng 800W, chế độ nướng giàn trên 1000W',
        keywords: ['sharp', 'lo vi song', 'lo nuong', 'microwave', 'rg222']
      },
      {
        name: 'Máy lọc nước RO Kangaroo / Karofi',
        brand: 'Kangaroo / Karofi',
        model: '10 lõi Nóng - Lạnh',
        powerWatts: 90,
        isInverter: false,
        hoursPerDay: 8,
        daysPerMonth: 30,
        loadFactor: 0.40,
        room: 'Nhà bếp / Phòng khách',
        note: 'Máy bơm RO chạy tự động khi bình áp vơi nước',
        keywords: ['kangaroo', 'karofi', 'may loc nuoc', 'loc nuoc ro']
      }
    ]
  },

  // --- 4. GIẶT SẤY & NƯỚC NÓNG ---
  {
    category: 'water_laundry',
    categoryName: 'Giặt sấy & Nóng lạnh',
    icon: 'droplets',
    items: [
      {
        name: 'Bình nóng lạnh Ariston (30 Lít)',
        brand: 'Ariston',
        model: 'Andris2 30RS (30L)',
        powerWatts: 2500,
        isInverter: false,
        hoursPerDay: 0.75,
        daysPerMonth: 30,
        loadFactor: 0.85,
        room: 'Phòng tắm Master',
        note: 'Bình tắm gián tiếp tráng men Titan, đun sôi 20-30 phút',
        keywords: ['ariston', 'binh nong lanh', 'binh nuoc nong', '30l', 'andris2']
      },
      {
        name: 'Bình nóng lạnh Ariston (20 Lít)',
        brand: 'Ariston',
        model: 'Blu 20R (20L)',
        powerWatts: 2500,
        isInverter: false,
        hoursPerDay: 0.6,
        daysPerMonth: 30,
        loadFactor: 0.85,
        room: 'Phòng tắm phụ',
        note: 'Dung tích 20 lít phù hợp 2-3 người dùng',
        keywords: ['ariston', 'binh nong lanh', '20l', 'blu20r']
      },
      {
        name: 'Bình nóng lạnh Ferroli (20 Lít)',
        brand: 'Ferroli',
        model: 'Midi 20L',
        powerWatts: 2500,
        isInverter: false,
        hoursPerDay: 0.6,
        daysPerMonth: 30,
        loadFactor: 0.85,
        room: 'Phòng tắm',
        note: 'Bình chứa tráng men Blue Silicon',
        keywords: ['ferroli', 'binh nong lanh', 'feroli', '20l']
      },
      {
        name: 'Máy nước nóng trực tiếp Panasonic',
        brand: 'Panasonic',
        model: 'DH-4NP1VS (Trực tiếp có bơm)',
        powerWatts: 4500,
        isInverter: false,
        hoursPerDay: 0.35,
        daysPerMonth: 30,
        loadFactor: 0.75,
        room: 'Phòng tắm',
        note: 'Đun nóng trực tiếp không bình chứa, công suất rất lớn 4500W',
        keywords: ['panasonic', 'may nuoc nong truc tiep', 'binh truc tiep', 'dh4np1']
      },
      {
        name: 'Máy giặt cửa ngang Electrolux 9kg Inverter',
        brand: 'Electrolux',
        model: 'UltimateCare 9kg (EWF9024)',
        powerWatts: 500,
        isInverter: true,
        hoursPerDay: 1.0,
        daysPerMonth: 30,
        loadFactor: 0.60,
        room: 'Ban công / Phòng giặt',
        note: 'EcoInverter êm ái, nếu dùng chế độ giặt nước nóng công suất đun ~1800W',
        keywords: ['electrolux', 'may giat', 'cua ngang', '9kg', 'inverter', 'ultimatecare']
      },
      {
        name: 'Máy giặt cửa trên Toshiba 8.5kg',
        brand: 'Toshiba',
        model: 'AW-K905DV (8.5kg)',
        powerWatts: 450,
        isInverter: false,
        hoursPerDay: 1.0,
        daysPerMonth: 30,
        loadFactor: 0.65,
        room: 'Ban công',
        note: 'Máy giặt lồng đứng truyền thống',
        keywords: ['toshiba', 'may giat', 'cua tren', 'long dung', '8.5kg']
      },
      {
        name: 'Máy sấy quần áo ngưng tụ Electrolux (8kg)',
        brand: 'Electrolux',
        model: 'EDC804CEWA (8kg)',
        powerWatts: 2250,
        isInverter: false,
        hoursPerDay: 1.2,
        daysPerMonth: 15,
        loadFactor: 0.85,
        room: 'Phòng giặt',
        note: 'Dùng nhiều vào mùa nồm ẩm, sấy khô sợi vải',
        keywords: ['electrolux', 'may say', 'say quan ao', '8kg', 'edc804']
      }
    ]
  },

  // --- 5. THIẾT BỊ SỐ & GIẢI TRÍ ---
  {
    category: 'electronics',
    categoryName: 'TV & Thiết bị số',
    icon: 'tv',
    items: [
      {
        name: 'Smart TV Sony Bravia 55 inch 4K',
        brand: 'Sony',
        model: 'KD-55X75K (55 inch)',
        powerWatts: 140,
        isInverter: false,
        hoursPerDay: 5,
        daysPerMonth: 30,
        loadFactor: 0.95,
        room: 'Phòng khách',
        note: 'Màn hình 4K HDR, âm thanh vòm Dolby Audio',
        keywords: ['sony', 'tivi', 'tv', 'bravia', '55 inch', '4k']
      },
      {
        name: 'Smart TV Samsung Crystal 65 inch 4K',
        brand: 'Samsung',
        model: 'UA65AU7002 (65 inch)',
        powerWatts: 165,
        isInverter: false,
        hoursPerDay: 5,
        daysPerMonth: 30,
        loadFactor: 0.95,
        room: 'Phòng khách lớn',
        note: 'Màn hình lớn 65 inch độ phân giải siêu nét',
        keywords: ['samsung', 'tivi', 'tv', '65 inch', 'crystal uhd']
      },
      {
        name: 'Smart TV phòng ngủ 43 inch',
        brand: 'LG / Xiaomi',
        model: '43 inch 4K UHD',
        powerWatts: 90,
        isInverter: false,
        hoursPerDay: 3,
        daysPerMonth: 30,
        loadFactor: 0.95,
        room: 'Phòng ngủ',
        note: 'Kích cỡ vừa vặn cho phòng ngủ',
        keywords: ['lg', 'xiaomi', 'tivi', 'tv 43 inch', '43 inch']
      },
      {
        name: 'Máy tính để bàn PC Gaming / Đồ họa',
        brand: 'Custom PC',
        model: 'Nguồn PSU 650W + Card VGA',
        powerWatts: 350,
        isInverter: false,
        hoursPerDay: 6,
        daysPerMonth: 30,
        loadFactor: 0.75,
        room: 'Phòng làm việc',
        note: 'Bao gồm CPU, card đồ họa rời và màn hình 27 inch',
        keywords: ['may tinh', 'pc', 'pc gaming', 'may ban', 'may tinh de ban']
      },
      {
        name: 'Laptop làm việc văn phòng (Dell / MacBook)',
        brand: 'Apple / Dell / Asus',
        model: 'Củ sạc Type-C 65W - 96W',
        powerWatts: 65,
        isInverter: false,
        hoursPerDay: 8,
        daysPerMonth: 30,
        loadFactor: 0.60,
        room: 'Bàn làm việc',
        note: 'Tiêu thụ điện thấp, pin tích hợp',
        keywords: ['laptop', 'macbook', 'dell', 'asus', 'may tinh xach tay']
      },
      {
        name: 'Camera giám sát Wi-Fi 360° trong nhà (Ezviz / Imou)',
        brand: 'Ezviz / Imou',
        model: 'C6N / Ranger 2 (Full HD)',
        powerWatts: 5,
        isInverter: false,
        hoursPerDay: 24,
        daysPerMonth: 30,
        loadFactor: 1.0,
        room: 'Phòng khách / Cửa chính',
        note: 'Chạy 24/24, có đèn hồng ngoại ban đêm, tiêu hao ~3.6 số điện/tháng',
        keywords: ['camera', 'cam', 'ezviz', 'imou', 'c6n', 'giam sat', 'camera an ninh', 'camera wifi', 'cctv']
      },
      {
        name: 'Camera an ninh ngoài trời chống nước (Imou / Ezviz / Hikvision)',
        brand: 'Imou / Ezviz',
        model: 'Bullet 2C / H3c Color Night',
        powerWatts: 7,
        isInverter: false,
        hoursPerDay: 24,
        daysPerMonth: 30,
        loadFactor: 1.0,
        room: 'Cổng / Sân trước',
        note: 'Chạy 24/24, đèn LED trợ sáng ban đêm có màu, tiêu hao ~5 số điện/tháng',
        keywords: ['camera', 'cam ngoai troi', 'ezviz', 'imou', 'hikvision', 'camera an ninh', 'bullet']
      },
      {
        name: 'Đầu ghi hình Camera an ninh DVR / NVR (Kèm 4 mắt camera)',
        brand: 'Hikvision / Dahua',
        model: 'DVR 4 kênh kèm ổ cứng HDD',
        powerWatts: 25,
        isInverter: false,
        hoursPerDay: 24,
        daysPerMonth: 30,
        loadFactor: 1.0,
        room: 'Hệ thống an ninh',
        note: 'Đầu ghi và ổ cứng chạy liên tục 24/7 ghi hình, ~18 số điện/tháng',
        keywords: ['dau ghi', 'dvr', 'hikvision', 'dahua', 'camera', 'nvr']
      }
    ]
  },

  // --- 6. CHIẾU SÁNG & THIẾT BỊ KHÁC ---
  {
    category: 'others',
    categoryName: 'Chiếu sáng & Gia dụng khác',
    icon: 'lightbulb',
    items: [
      {
        name: 'Đèn LED tuýp Rạng Đông T8 (1.2m)',
        brand: 'Rạng Đông',
        model: 'LED T8 18W (1m2)',
        powerWatts: 18,
        isInverter: false,
        hoursPerDay: 6,
        daysPerMonth: 30,
        loadFactor: 1.0,
        room: 'Phòng khách / Bếp',
        note: 'Tiết kiệm 60% điện so với bóng huỳnh quang cũ',
        keywords: ['rang dong', 'den led', 'den tuyp', '18w', 'den 1m2']
      },
      {
        name: 'Đèn LED búp tròn Rạng Đông (12W)',
        brand: 'Rạng Đông / Điện Quang',
        model: 'LED Bulb 12W',
        powerWatts: 12,
        isInverter: false,
        hoursPerDay: 6,
        daysPerMonth: 30,
        loadFactor: 1.0,
        room: 'Phòng ngủ / Ban công',
        note: 'Bóng đui xoáy E27 thông dụng',
        keywords: ['rang dong', 'den bulb', 'den bup', '12w', 'den led']
      },
      {
        name: 'Hệ thống đèn trần thạch cao Downlight âm trần (Combo 6 bóng)',
        brand: 'Rạng Đông / Philips',
        model: 'Downlight 9W x 6 bóng',
        powerWatts: 54,
        isInverter: false,
        hoursPerDay: 5,
        daysPerMonth: 30,
        loadFactor: 1.0,
        room: 'Phòng khách',
        note: 'Đèn hắt trần phòng khách tổng công suất 54W',
        keywords: ['den downlight', 'den am tran', 'den tran', 'rang dong']
      },
      {
        name: 'Router WiFi 6 gia đình (Viettel / VNPT / Asus)',
        brand: 'Viettel / TP-Link',
        model: 'WiFi 6 Dual Band Gigabit',
        powerWatts: 15,
        isInverter: false,
        hoursPerDay: 24,
        daysPerMonth: 30,
        loadFactor: 0.90,
        room: 'Cả nhà',
        note: 'Cắm liên tục 24/24 phát sóng internet, tiêu hao ~10-11 số điện/tháng',
        keywords: ['router', 'wifi', 'cuc wifi', 'modem', 'tp-link', 'viettel']
      },
      {
        name: 'Robot hút bụi lau nhà Ecovacs / Xiaomi',
        brand: 'Ecovacs / Roborock',
        model: 'Deebot N8 / Q7 Max',
        powerWatts: 40,
        isInverter: false,
        hoursPerDay: 2,
        daysPerMonth: 30,
        loadFactor: 0.80,
        room: 'Cả nhà',
        note: 'Đế sạc tiêu thụ điện khi sạc đầy và duy trì',
        keywords: ['robot', 'hut bui', 'ecovacs', 'xiaomi', 'roborock']
      },
      {
        name: 'Bàn là / Bàn ủi hơi nước đứng Philips',
        brand: 'Philips',
        model: 'GC518 / GC482 (Hơi nước đứng)',
        powerWatts: 1600,
        isInverter: false,
        hoursPerDay: 0.2,
        daysPerMonth: 20,
        loadFactor: 0.90,
        room: 'Phòng ngủ',
        note: 'Công suất đốt nóng hơi nước lớn',
        keywords: ['philips', 'ban la', 'ban ui', 'ban ui hoi nuoc']
      },
      {
        name: 'Củ sạc điện thoại cắm sẵn ổ điện (Điện chờ / Vampire Draw)',
        brand: 'Apple / Samsung / Anker',
        model: 'Củ sạc nhanh Type-C cắm chờ 24/7',
        powerWatts: 1,
        isInverter: false,
        hoursPerDay: 24,
        daysPerMonth: 30,
        loadFactor: 0.50,
        room: 'Đầu giường / Bàn làm việc',
        note: 'Cắm liên tục không rút dù không sạc máy, mạch biến áp xung vẫn tiêu thụ điện ngầm',
        keywords: ['phich cam', 'cu sac', 'sac dien thoai', 'sac', 'standby', 'vampire', 'o cam', 'dien ngam']
      },
      {
        name: 'Ổ cắm thông minh Smart Plug / Công tắc thông minh',
        brand: 'Tuya / Sonoff / Rạng Đông',
        model: 'Smart Plug 16A WiFi',
        powerWatts: 2,
        isInverter: false,
        hoursPerDay: 24,
        daysPerMonth: 30,
        loadFactor: 1.0,
        room: 'Gia đình',
        note: 'Mạch thu sóng WiFi luôn hoạt động để nhận lệnh bật tắt từ xa qua app',
        keywords: ['o cam', 'smart plug', 'tuya', 'sonoff', 'phich cam', 'cong tac thong minh']
      }
    ]
  }
];

// Hàm chuyển đổi tiếng Việt có dấu sang không dấu
function normalizeSearchText(str) {
  if (!str) return '';
  return str
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd')
    .trim();
}

// Hàm tìm kiếm thông minh sản phẩm theo từ khóa
function searchApplianceCatalog(query) {
  if (!query || !query.trim()) return [];
  const qClean = normalizeSearchText(query);
  const qTokens = qClean.split(/\s+/).filter(Boolean);

  const results = [];

  APPLIANCE_PRESETS.forEach(group => {
    group.items.forEach(item => {
      // Chuẩn hóa tên, hãng, model, note, keywords
      const nameNorm = normalizeSearchText(item.name);
      const brandNorm = normalizeSearchText(item.brand);
      const modelNorm = normalizeSearchText(item.model);
      const noteNorm = normalizeSearchText(item.note);
      const kwNorm = (item.keywords || []).map(normalizeSearchText).join(' ');

      const combined = `${nameNorm} ${brandNorm} ${modelNorm} ${noteNorm} ${kwNorm}`;

      // Điểm số tương đồng
      let score = 0;
      let matchedTokens = 0;

      qTokens.forEach(token => {
        if (combined.includes(token)) {
          matchedTokens++;
          if (nameNorm.includes(token)) score += 5;
          if (brandNorm.includes(token)) score += 4;
          if (modelNorm.includes(token)) score += 4;
          if (kwNorm.includes(token)) score += 3;
        }
      });

      if (matchedTokens === qTokens.length) {
        results.push({
          ...item,
          category: group.category,
          categoryName: group.categoryName,
          score
        });
      }
    });
  });

  // Sắp xếp theo độ khớp cao nhất
  return results.sort((a, b) => b.score - a.score).slice(0, 8);
}

// Danh sách thiết bị mặc định (dùng khi bấm "Khôi phục dữ liệu mẫu")
const DEFAULT_SAMPLE_APPLIANCES = [
  {
    id: 'sample-1',
    name: 'Điều hòa Daikin 1.0 HP Inverter',
    category: 'cooling',
    brand: 'Daikin',
    model: 'FTKB25WAVMV',
    powerWatts: 820,
    isInverter: true,
    hoursPerDay: 9,
    daysPerMonth: 30,
    quantity: 1,
    loadFactor: 0.55,
    room: 'Phòng ngủ Master',
    imageUrl: 'assets/appliance-daikin-ac.jpg',
    enabled: true
  },
  {
    id: 'sample-2',
    name: 'Quạt đứng Senko DCN1801',
    category: 'cooling',
    brand: 'Senko',
    model: 'DCN1801',
    powerWatts: 65,
    isInverter: false,
    hoursPerDay: 8,
    daysPerMonth: 30,
    quantity: 1,
    loadFactor: 0.95,
    room: 'Phòng khách',
    imageUrl: 'assets/appliance-senko-fan.jpg',
    enabled: true
  },
  {
    id: 'sample-3',
    name: 'Nồi cơm nắp gài Toshiba 1 lít RC-10JH1TVN',
    category: 'kitchen',
    brand: 'Toshiba',
    model: 'RC-10JH1TVN',
    powerWatts: 500,
    isInverter: false,
    hoursPerDay: 1.5,
    daysPerMonth: 30,
    quantity: 1,
    loadFactor: 0.80,
    room: 'Nhà bếp',
    imageUrl: 'assets/appliance-toshiba-cooker.jpg',
    enabled: true
  },
  {
    id: 'sample-4',
    name: 'Tủ lạnh Panasonic 2 cánh Inverter',
    category: 'fridge',
    brand: 'Panasonic',
    model: 'NR-TV261 (255L)',
    powerWatts: 150,
    isInverter: true,
    hoursPerDay: 24,
    daysPerMonth: 30,
    quantity: 1,
    loadFactor: 0.24,
    room: 'Nhà bếp',
    imageUrl: 'assets/appliance-panasonic-fridge.jpg',
    enabled: true
  },
  {
    id: 'sample-5',
    name: 'Bình nóng lạnh Ariston (30 Lít)',
    category: 'water_laundry',
    brand: 'Ariston',
    model: 'Andris2 30RS',
    powerWatts: 2500,
    isInverter: false,
    hoursPerDay: 0.75,
    daysPerMonth: 30,
    quantity: 1,
    loadFactor: 0.85,
    room: 'Phòng tắm',
    imageUrl: 'assets/appliance-ariston-waterheater.png',
    enabled: true
  },
  {
    id: 'sample-6',
    name: 'Smart TV Sony Bravia 55 inch 4K',
    category: 'electronics',
    brand: 'Sony',
    model: 'KD-55X75K',
    powerWatts: 140,
    isInverter: false,
    hoursPerDay: 5,
    daysPerMonth: 30,
    quantity: 1,
    loadFactor: 0.95,
    room: 'Phòng khách',
    imageUrl: 'assets/appliance-sony-tv.jpg',
    enabled: true
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { APPLIANCE_PRESETS, DEFAULT_SAMPLE_APPLIANCES, searchApplianceCatalog };
}
