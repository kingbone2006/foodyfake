# 🍲 FoodyFake - Online Food & Restaurant Discovery Platform

<p align="center">
  <a href="README.md"><strong>🇺🇸 English (Current)</strong></a> &nbsp;|&nbsp; 
  <a href="README_VI.md"><strong>🇻🇳 Xem bản Tiếng Việt</strong></a>
</p>

<p align="center">
  <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop" alt="FoodyFake Banner" width="100%" style="border-radius: 10px; max-height: 380px; object-fit: cover;" />
</p>

<p align="center">
  <b>A modern full-stack food discovery, restaurant review, and online food ordering platform inspired by Foody / ShopeeFood.</b>
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

## 📖 Overview

**FoodyFake** is a full-stack web application replicating the core functionalities of top-tier food delivery and restaurant rating platforms. Built with a lightning-fast Single Page Application (SPA) frontend utilizing **React 18**, **TypeScript**, **Vite**, and **Radix UI** / **Tailwind CSS**, coupled with a robust **Node.js / Express** RESTful API backend and **MongoDB** database.

Supports 3 dedicated user roles:
1. **Customers (User)**: Discover restaurants, search dishes, apply smart filters, post reviews with photos, and bookmark favorite places.
2. **Restaurant Owners (Vendor)**: Manage menus, update dish pricing, and track customer feedback in real time.
3. **Administrators (Admin)**: Visual analytics dashboards (Recharts), restaurant verification, and user management.

---

## ✨ Key Features

### 1. 🍽️ Client & Food Discovery
- **Smart Search & Filters**: Search by restaurant name, cuisine, or location. Filter by Top Rated ⭐, Open Now 🕒, Delivery, Buffet, and Takeaway.
- **Rich Categories**: Noodles, Rice, Sandwiches/Banh Mi, Seafood, Coffee & Desserts.
- **Curated Collections**: Regional culinary guides and featured hotspots.
- **Reviews & Ratings**: Share detailed reviews with 5-star ratings, food photos, and comments.
- **Bookmarks**: Save beloved restaurants to your personal wishlist.
- **Dark / Light Mode**: Seamless theme toggling with persistent state.

### 2. 🏪 Vendor Management Portal
- **Dashboard**: Track customer engagement and order feedback.
- **Menu Management**: Add, update, price, and toggle dish availability.
- **Review Moderation**: Respond to diner reviews directly.

### 3. 🛡️ Admin Dashboard
- **Analytics Visualizations**: Interactive business charts powered by `Recharts`.
- **Restaurant Moderation**: Approve, edit, or suspend listed venues.
- **User Management**: Control role assignments (`admin`, `vendor`, `user`).

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18, TypeScript, Vite, Tailwind CSS, Radix UI Primitives, Lucide Icons |
| **Routing & Forms** | React Router DOM v6, React Hook Form, Zod schema validation |
| **Charts & Feedback**| Recharts, Sonner Toast, next-themes |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB & Mongoose ODM |
| **Auth & Security** | JWT (Access & Refresh tokens), bcryptjs password hashing |
| **Dev Tooling** | `concurrently` (runs Vite + Express in a single command), ESLint |

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (Version 18.x or higher)
- [MongoDB](https://www.mongodb.com/) (Local on `localhost:27017` or MongoDB Atlas URI)
- `npm` or `pnpm`

### 2. Installation
```bash
git clone https://github.com/kingbone2006/foodyfake.git
cd foodyfake
npm install
```

### 3. Configure Environment Variables
Copy the template to create `.env`:
```bash
cp .env.example .env
```
Ensure `MONGODB_URI` and `JWT_SECRET` are properly configured.

### 4. Run Development Server
```bash
npm run dev
```
- 🌐 **Frontend**: [http://localhost:5173](http://localhost:5173)
- 🔌 **Backend API**: [http://localhost:5000](http://localhost:5000)

### 5. Production Build
```bash
npm run build
npm run preview
```

---

## 📜 License

This project is open-source under the [MIT License](LICENSE).
