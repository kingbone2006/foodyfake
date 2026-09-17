# 🍲 FoodyFake - Nền Tảng Đánh Giá & Khám Phá Ẩm Thực Trực Tuyến

<p align="center">
  <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop" alt="FoodyFake Banner" width="100%" style="border-radius: 10px; max-height: 380px; object-fit: cover;" />
</p>

<p align="center">
  <b>Hệ thống tìm kiếm quán ăn, đánh giá nhà hàng và đặt đồ ăn trực tuyến (Food Discovery & Restaurant Management Platform) lấy cảm hứng từ Foody / ShopeeFood.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-5.5-blue?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwindcss&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/Radix_UI-shadcn-161618?logo=radixui&logoColor=white" alt="Radix UI" />
  <img src="https://img.shields.io/badge/Node.js-Express-green?logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT" />
</p>

---

## 📖 Giới Thiệu (Overview)

**FoodyFake** là một ứng dụng web Full-stack hiện đại mô phỏng các tính năng cốt lõi của nền tảng ẩm thực hàng đầu (Foody / ShopeeFood). Dự án được thiết kế với kiến trúc Single Page Application (SPA) siêu nhanh bằng **React 18**, **TypeScript**, **Vite** và bộ UI Component cao cấp từ **Radix UI** / **Tailwind CSS**, kết hợp cùng RESTful API backend bằng **Express** và cơ sở dữ liệu **MongoDB**.

Hệ thống phân quyền đầy đủ 3 đối tượng người dùng:
1. **Khách hàng (User/Customer)**: Khám phá nhà hàng, tìm kiếm món ngon, lọc địa điểm, viết review và lưu bookmark.
2. **Chủ quán (Vendor)**: Quản lý thực đơn món ăn (Dishes), cập nhật bảng giá và theo dõi phản hồi đánh giá của thực khách.
3. **Quản trị viên (Admin)**: Xem số liệu thống kê trực quan (Recharts), kiểm duyệt nhà hàng và quản lý toàn bộ tài khoản người dùng.

---

## ✨ Tính Năng Nổi Bật (Key Features)

### 1. 🍽️ Dành Cho Người Dùng (Client & Discovery)
- **Trang chủ & Tìm kiếm thông minh**: Tìm kiếm theo tên quán, món ăn hoặc vị trí địa lý.
- **Bộ lọc nhanh (Quick Filters)**: Lọc quán đánh giá cao ⭐, đang mở cửa 🕒, buffet, ăn vặt, giao hàng tận nơi, mang về...
- **Danh mục món ăn phong phú**: Phở & Bún, Cơm, Bánh Mì, Hải Sản, Cháo, Cà Phê...
- **Bộ sưu tập đặc sắc (Curated Collections)**: Món ngon Hà Nội, đặc sản Sài Gòn, ẩm thực Miền Trung...
- **Đánh giá & Xếp hạng (Reviews & Ratings)**: Viết nhận xét kèm số sao, hình ảnh thực tế và bình luận.
- **Đánh dấu địa điểm (Bookmarks)**: Lưu lại các quán ăn yêu thích để ghé thăm sau.
- **Giao diện đa chế độ**: Hỗ trợ chuyển đổi mượt mà giữa **Light Mode** ☀️ và **Dark Mode** 🌙.

### 2. 🏪 Dành Cho Chủ Quán (Vendor Portal)
- **Bảng điều khiển Vendor**: Theo dõi tổng quan hoạt động kinh doanh và phản hồi của khách hàng.
- **Quản lý món ăn (Dishes Management)**: Thêm mới, chỉnh sửa giá cả, cập nhật mô tả, hình ảnh và trạng thái còn/hết hàng.
- **Quản lý đánh giá (Review Moderation)**: Đọc và phản hồi các đánh giá từ thực khách.

### 3. 🛡️ Bảng Điều Khiển Quản Trị (Admin Portal)
- **Dashboard Phân Tích (Analytics)**: Biểu đồ trực quan hóa dữ liệu người dùng, tương tác và địa điểm bằng `Recharts`.
- **Quản lý nhà hàng**: Phê duyệt, quản lý thông tin và trạng thái hoạt động của các quán ăn trên nền tảng.
- **Quản lý thành viên**: Kiểm soát danh sách người dùng, gán vai trò (`admin`, `vendor`, `user`).
- **Báo cáo & Cài đặt hệ thống**: Báo cáo phản ánh từ người dùng và thiết lập cấu hình chung.

### 4. 🔐 Xác Thực & Bảo Mật (Authentication & Security)
- Đăng ký, đăng nhập tài khoản với mã hóa mật khẩu `bcryptjs`.
- Cơ chế phiên làm việc bảo mật với **JWT Access Token** và **Refresh Token**.
- Sẵn sàng tích hợp **Google OAuth 2.0** & **Facebook OAuth**.
- Kiểm tra tính hợp lệ dữ liệu biểu mẫu chặt chẽ với **React Hook Form** và **Zod**.

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

| Lớp | Công nghệ & Thư viện |
| :--- | :--- |
| **Frontend Core** | [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/) |
| **UI & Styling** | [Tailwind CSS](https://tailwindcss.com/), [Radix UI Primitives](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/), `tailwind-merge`, `clsx` |
| **Routing & Forms** | [React Router DOM v6](https://reactrouter.com/), [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/) |
| **Data Viz & Notifs**| [Recharts](https://recharts.org/), [Sonner Toast](https://sonner.emilkowal.ski/), `next-themes` |
| **Backend Core** | [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/) |
| **Database** | [MongoDB](https://www.mongodb.com/) & [Mongoose ODM](https://mongoosejs.com/) |
| **Auth & Security** | [JSON Web Token (JWT)](https://jwt.io/), [bcryptjs](https://github.com/dcodeIO/bcrypt.js) |
| **Dev Tooling** | `concurrently` (chạy song song Frontend & Backend), ESLint, PostCSS |

---

## 📁 Cấu Trúc Thư Mục (Project Structure)

```text
foodyfake/
├── public/                 # Static assets
├── src/
│   ├── components/         # Tái sử dụng components (UI & layout)
│   │   ├── theme-provider.tsx  # Theme context (Light/Dark mode)
│   │   └── ui/             # Radix UI / shadcn components (Button, Dialog, Badge...)
│   ├── contexts/           # React Contexts (AuthContext, etc.)
│   ├── hooks/              # Custom React Hooks
│   ├── lib/                # Utilities & helper functions (cn, formatters)
│   ├── pages/              # Trang giao diện chính theo phân quyền
│   │   ├── admin/          # Quản trị: analytics, reports, restaurants, users, settings
│   │   ├── auth/           # Xác thực: login, register, forgot-password
│   │   ├── user/           # Khách hàng: profile, bookmarks, reviews
│   │   └── vendor/         # Đối tác: dashboard, dishes, reviews
│   ├── server/             # Express.js REST API Backend
│   │   ├── middleware/     # Auth middleware, role checking
│   │   ├── models/         # Mongoose Schemas (User, Restaurant, Dish, Review, Bookmark, Category)
│   │   ├── routes/         # API Routers (/auth, /restaurants, /dishes, /reviews, /bookmarks)
│   │   └── index.js        # Điểm khởi chạy Express Server
│   ├── services/           # Axios API services (auth, restaurant, dish, bookmark, review)
│   ├── App.tsx             # Định tuyến App & Client Layout
│   └── main.tsx            # Entry point của React SPA
├── .env.example            # Mẫu cấu hình biến môi trường
├── package.json            # Thông tin dependencies và scripts
├── tailwind.config.js      # Cấu hình giao diện Tailwind
├── tsconfig.json           # Cấu hình TypeScript
└── vite.config.ts          # Cấu hình bundler Vite
```

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Dự Án (Quick Start)

### 1. Yêu Cầu Môi Trường (Prerequisites)
- [Node.js](https://nodejs.org/) (Khuyến nghị bản **18.x** trở lên).
- [MongoDB](https://www.mongodb.com/try/download/community) chạy trên máy cục bộ (`localhost:27017`) hoặc đường dẫn kết nối [MongoDB Atlas](https://www.mongodb.com/atlas).
- Trình quản lý gói: `npm` hoặc `pnpm`.

---

### 2. Cài Đặt (Installation)

1. **Clone repository:**
   ```bash
   git clone https://github.com/kingbone2006/foodyfake.git
   cd foodyfake
   ```

2. **Cài đặt các thư viện phụ thuộc (Dependencies):**
   ```bash
   npm install
   # Hoặc nếu bạn dùng pnpm:
   # pnpm install
   ```

---

### 3. Cấu Hình Biến Môi Trường (Environment Variables)

Tạo file `.env` ở thư mục gốc của dự án bằng cách sao chép từ file mẫu:

```bash
cp .env.example .env
```

Cập nhật các thông số cơ bản trong file `.env`:

```env
# Kết nối Cơ sở dữ liệu MongoDB
MONGODB_URI=mongodb://localhost:27017/restaurant_db
MONGODB_DB_NAME=restaurant_db

# Bảo mật JWT
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d
REFRESH_TOKEN_SECRET=your-refresh-token-secret-change-this-in-production
REFRESH_TOKEN_EXPIRES_IN=30d

# Thiết lập cổng & Domain ứng dụng
PORT=5000
NODE_ENV=development
APP_URL=http://localhost:5173
API_URL=http://localhost:5173/api
CORS_ORIGIN=http://localhost:5173
```

> [!NOTE]
> Các cấu hình OAuth (Google, Facebook), Google Maps API Key, Imgur và SMTP Email là tùy chọn nếu bạn chỉ chạy kiểm thử giao diện cục bộ.

---

### 4. Khởi Chạy Dự Án (Run Development)

Chạy lệnh sau để khởi động **cả Frontend Vite và Backend Express** cùng lúc:

```bash
npm run dev
# hoặc
pnpm dev
```

Sau khi chạy:
- 🌐 **Giao diện Client (Frontend)**: [http://localhost:5173](http://localhost:5173)
- 🔌 **Máy chủ API (Backend Express)**: [http://localhost:5000](http://localhost:5000)
- 🩺 **Kiểm tra trạng thái máy chủ (Healthcheck)**: [http://localhost:5000/api/health](http://localhost:5000/api/health)

---

### 5. Build Bản Triển Khai (Production Build)

Để build tối ưu mã nguồn Frontend cho môi trường Production:

```bash
npm run build
```

Kiểm tra bản build trước khi deploy:
```bash
npm run preview
```

---

## 📡 Danh Sách API Chính (REST Endpoints)

| Phương thức | Endpoint | Mô tả | Quyền truy cập |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/health` | Kiểm tra trạng thái hoạt động của server | Công khai |
| `POST` | `/api/auth/register` | Đăng ký tài khoản mới | Công khai |
| `POST` | `/api/auth/login` | Đăng nhập tài khoản & nhận JWT | Công khai |
| `GET` | `/api/restaurants` | Lấy danh sách quán ăn (hỗ trợ tìm kiếm, lọc) | Công khai |
| `GET` | `/api/restaurants/:id` | Xem chi tiết thông tin nhà hàng & thực đơn | Công khai |
| `POST` | `/api/restaurants` | Tạo hồ sơ nhà hàng mới | Vendor / Admin |
| `GET` | `/api/dishes` | Danh sách món ăn theo nhà hàng / danh mục | Công khai |
| `POST` | `/api/dishes` | Thêm món ăn mới vào menu | Vendor |
| `GET` | `/api/reviews` | Danh sách đánh giá của nhà hàng | Công khai |
| `POST` | `/api/reviews` | Gửi đánh giá và bình chọn sao cho quán ăn | Đã đăng nhập |
| `GET` | `/api/bookmarks` | Lấy danh sách quán đã lưu của người dùng | Đã đăng nhập |
| `POST` | `/api/bookmarks` | Thêm / Xóa quán khỏi danh sách bookmark | Đã đăng nhập |

---

## 📜 Giấy Phép (License)

Dự án này được phát hành dưới giấy phép mã nguồn mở [MIT License](LICENSE). Bạn hoàn toàn có thể tự do học tập, sử dụng và phát triển thêm.

---

<p align="center">
  Được phát triển với niềm đam mê ẩm thực và công nghệ ❤️ bởi <a href="https://github.com/kingbone2006">kingbone2006</a>
</p>
