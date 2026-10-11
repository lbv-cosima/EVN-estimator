# ⚡ Ứng Dụng Ước Tính Tiền Điện Tháng Tới (EVN Bill Estimator)

Ứng dụng web trực quan, hiện đại giúp bạn ước tính chính xác hóa đơn tiền điện sinh hoạt tháng tới dựa trên các thiết bị thực tế đang sử dụng trong gia đình (hãng sản xuất, model, công suất, công nghệ Inverter), kết hợp các yếu tố ngoại cảnh gây hao tổn điện (thời tiết nắng nóng hè, hướng phòng nắng chiếu, thói quen cài nhiệt độ điều hòa, điện tiêu hao chờ ngầm).

---

## 🌟 Tính Năng Nổi Bật

1. **Nhập Chi Tiết Từng Thiết Bị Điện**:
   - Tên thiết bị, nhóm danh mục (Làm mát, Tủ lạnh, Bếp, Giặt & Nước nóng, Giải trí, Khác).
   - Hãng sản xuất (Daikin, Panasonic, LG, Samsung, Casper, Electrolux, Sunhouse...).
   - Model / thông số kỹ thuật (ví dụ: *1.0 HP Inverter FTKB25, 250L, 9kg...*).
   - Công suất định mức (Watt).
   - Công nghệ **Inverter** (tự động tính hệ số duy trì tải tối ưu).
   - Thời gian sử dụng: Giờ/ngày, ngày/tháng, số lượng thiết bị, vị trí phòng.

2. **Kho Mẫu Nhanh (Quick Presets)**:
   - Tích hợp sẵn hàng chục mẫu thiết bị phổ biến nhất tại Việt Nam (điều hòa Daikin/Panasonic/Casper, tủ lạnh LG/Samsung, máy giặt Electrolux, bình nóng lạnh Ariston, bếp từ đôi Sunhouse/Bosch...).
   - Thêm vào danh sách chỉ với 1 cú click!

3. **Mô Phỏng Các Yếu Tố Hao Tổn Ngoại Cảnh**:
   - **Mùa & Thời tiết**: Hè nắng nóng gay gắt (>38°C) tăng tải +30% điều hòa & tủ lạnh; mùa đông tăng đun nước nóng; mùa mát giảm tải.
   - **Hướng nắng & Cách nhiệt**: Phòng hướng Tây hấp thụ nhiệt mạnh, cửa kính hở (+25% điện điều hòa).
   - **Thói quen cài nhiệt độ**: Để 20-22°C (ngốn điện gấp 1.35 lần) vs 26-28°C kết hợp quạt (tiết kiệm 20% điện).
   - **Điện chờ ngầm (Vampire Draw)**: Ước tính hao tổn từ thiết bị cắm phích liên tục (router wifi, smart TV, vi sóng...).
   - **Thời gian ở nhà**: Điều chỉnh tăng tải vào kỳ nghỉ lễ / cuối tuần.

4. **Biểu Giá Điện Sinh Hoạt EVN 6 Bậc Mới Nhất**:
   - Bậc 1 (0 - 50 kWh): **1.984 đ/kWh**
   - Bậc 2 (51 - 100 kWh): **2.050 đ/kWh**
   - Bậc 3 (101 - 200 kWh): **2.380 đ/kWh**
   - Bậc 4 (201 - 300 kWh): **2.998 đ/kWh**
   - Bậc 5 (301 - 400 kWh): **3.350 đ/kWh**
   - Bậc 6 (Từ 401 kWh trở lên): **3.460 đ/kWh**
   - Hỗ trợ cả **chế độ giá cố định** (dành cho người ở trọ hoặc hộ kinh doanh).
   - Tùy chọn thuế VAT 8% hoặc 10%.

5. **Trực Quan Hóa & Gợi Ý Tiết Kiệm Thông Minh**:
   - Biểu đồ tròn cơ cấu tiêu thụ điện theo nhóm thiết bị (nhìn ra ngay thiết bị ngốn điện nhất).
   - Bảng phân bổ chi tiết số tiền và sản lượng rơi vào từng bậc thang EVN.
   - Cảnh báo trực quan khi tiền điện chạm Bậc 5, Bậc 6.
   - Gợi ý mẹo tiết kiệm điện cụ thể kèm số tiền ước tính tiết kiệm được mỗi tháng.

6. **Tiện Ích**:
   - Tự động lưu dữ liệu vào trình duyệt (LocalStorage).
   - Sao lưu & khôi phục dữ liệu qua file JSON.
   - Hỗ trợ in ấn / xuất hóa đơn PDF sắc nét.

---

## 🚀 Hướng Dẫn Sử Dụng

### Cách 1: Khởi chạy bằng Python (Khuyên dùng)
Mở cửa sổ PowerShell / Terminal tại thư mục này và chạy:
```powershell
python run_app.py
```
> Trình duyệt sẽ tự động mở trang web tại địa chỉ `http://localhost:8080`.

### Cách 2: Mở trực tiếp bằng trình duyệt
Nhấp đúp chuột vào file `index.html` để mở trực tiếp trong bất kỳ trình duyệt nào (Google Chrome, Microsoft Edge, Cốc Cốc, Firefox...).

---

## 📁 Cấu Trúc Thư Mục Dự Án

```
├── assets/                 # Toàn bộ hình ảnh sản phẩm, logo EVN và biểu tượng 3D
├── backend/                # Máy chủ Node.js Express kết nối cơ sở dữ liệu MySQL
│   ├── .env.example        # Mẫu cấu hình môi trường
│   ├── db.js               # Kết nối CSDL MySQL
│   ├── server.js           # API RESTful phục vụ danh mục thiết bị
│   └── package.json        # Danh sách thư viện npm
├── index.html              # Giao diện chính của ứng dụng web
├── styles.css              # Tùy biến giao diện và hiệu ứng Glassmorphism
├── app.js                  # Toàn bộ logic tính toán bậc thang EVN & điều khiển
├── presets.js              # Kho mẫu thiết bị điện phổ biến tại Việt Nam
├── run_app.py              # Script khởi động nhanh server bằng Python
├── start_app.bat           # Script chạy 1 click trên Windows
└── README.md               # Tài liệu hướng dẫn sử dụng
```
