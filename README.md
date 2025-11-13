Họ Tên: Lê Văn Xuân Hoàn
Mã sinh viên: 22IT093
Lớp sinh hoạt: 22SE1
Lớp học phần: Lập trình đa nền tảng (3)
Đề: 3

Ứng dụng Danh ngôn hàng ngày (Daily Quotes)
Đây là một ứng dụng di động đơn giản được xây dựng cho mục đích học tập, giúp người dùng xem các danh ngôn truyền cảm hứng và lưu lại những câu họ yêu thích.

Dự án này sử dụng React.js và được đóng gói thành ứng dụng di động (Android/iOS) bằng Capacitor.

🚀 Tính năng chính
Màn hình chính: Hiển thị một danh ngôn. Ban đầu, danh ngôn này được chọn ngẫu nhiên.

Quote mới: Người dùng có thể nhấn nút "Quote mới" để xem danh ngôn tiếp theo trong danh sách (tuần tự).

Yêu thích: Người dùng có thể nhấn ❤️ để thêm hoặc xóa một danh ngôn khỏi danh sách yêu thích.

Màn hình yêu thích: Hiển thị toàn bộ các danh ngôn đã được lưu.

Lưu trữ vĩnh viễn: Danh sách yêu thích được lưu trực tiếp trên thiết bị bằng @capacitor/storage, do đó dữ liệu không bị mất khi đóng ứng dụng.

🛠️ Công nghệ sử dụng
Framework: React.js

Routing: react-router-dom

Nền tảng Native: Capacitor

Lưu trữ: @capacitor/storage

Styling: CSS thuần

⚙️ Hướng dẫn cài đặt và chạy dự án
Để chạy dự án này trên máy của bạn, hãy làm theo các bước sau:

1. Tải về và cài đặt thư viện:

Bash

# Clone repository (nếu có) hoặc giải nén
# Di chuyển vào thư mục dự án
cd my-quote-app

# Cài đặt các thư viện Node.js cần thiết
npm install
2. Build dự án React:

Ứng dụng Capacitor đọc mã từ thư mục build. Chúng ta cần tạo ra thư mục này:

Bash

npm run build
3. Đồng bộ hóa với Capacitor:

Mỗi khi bạn thay đổi mã trong /src và build lại, bạn cần chạy lệnh này để cập nhật các nền tảng native (Android/iOS):

Bash

npx cap sync
4. Chạy trên máy ảo/thiết bị thật:

Để chạy trên Android:

Bash

npx cap open android
(Lệnh này sẽ mở dự án trong Android Studio. Từ đó, bạn chỉ cần nhấn nút "Run" ▶️.)

Để chạy trên iOS (yêu cầu macOS):

Bash

npx cap open ios
(Lệnh này sẽ mở dự án trong Xcode. Từ đó, bạn chỉ cần nhấn nút "Run" ▶️.)

📁 Cấu trúc thư mục
/my-quote-app
├── /src/                 # Toàn bộ mã nguồn React
│   ├── /components/      # Chứa các màn hình (Home.js, Favorites.js)
│   ├── /hooks/         # Chứa custom hook (useFavorites.js)
│   ├── App.css           # File CSS chung
│   ├── App.js            # Cấu hình router
│   └── index.js          # Điểm vào React
├── /screenshots/         # Chứa ảnh chụp màn hình ứng dụng
├── capacitor.config.json # Cấu hình Capacitor
├── package.json          # Quản lý thư viện
└── README.md             # Tệp thông tin này

