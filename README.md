# 🩺 Hey Doctor!

Hey Doctor! is a full-stack doctor appointment booking platform with separate User, Admin, and Backend applications. Users can browse doctors, book appointments, and manage their profiles, while administrators securely manage doctors and appointments.

---

## 🌐 Live Applications

Frontend (User App):  
https://hey-doctor-frontend.vercel.app

Admin Panel:  
https://hey-doctor-admin.vercel.app

Backend API:  
https://hey-doctor-backend.onrender.com

---

## 🧩 Project Structure

hey-doctor/
├── frontend/        User-facing application (React + Vite)
├── admin/           Admin dashboard (React + Vite)
└── Backend/         REST API (Node.js + Express)

---

## 🛠 Tech Stack

Frontend & Admin:
- React (Vite)
- Tailwind CSS
- Axios
- React Router
- Context API

Backend:
- Node.js
- Express.js
- MongoDB (Atlas)
- JWT Authentication
- Cloudinary
- CORS

Deployment:
- Frontend & Admin: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## 🔐 Environment Variables

Frontend (.env):
VITE_BACKEND_URL=https://hey-doctor-backend.onrender.com  
VITE_ADMIN_URL=https://hey-doctor-admin.vercel.app  

Admin (.env):
VITE_BACKEND_URL=https://hey-doctor-backend.onrender.com  

Backend (.env):
PORT=8000  
MONGODB_URI 
JWT_SECRET 
CLOUDINARY_NAME 
CLOUDINARY_API_KEY  
CLOUDINARY_API_SECRET 

Note: .env files are not committed to GitHub.

---

## 🚀 Features

User:
- Browse doctors
- Book appointments
- View and manage profile
- View appointment history
- Secure JWT authentication

Admin:
- Secure admin login
- Add and manage doctors
- View and manage appointments

Backend:
- RESTful APIs
- Role-based access control
- Secure authentication
- Image upload using Cloudinary

---

## 📦 Local Setup

Clone the repository:
git clone https://github.com/Quickaman/hey-doctor.git
cd hey-doctor

Backend:
cd Backend  
npm install  
npm start  

Frontend:
cd frontend  
npm install  
npm run dev  

Admin:
cd admin  
npm install  
npm run dev  

---

## 🔒 CORS & Security

The backend is configured to allow requests from:
- Localhost (development)
- Vercel Frontend
- Vercel Admin

JWT is used for secure authentication and authorization.

---

## 👨‍💻 Author

Aman Chaurasiya  
B.Tech IT, NIT Kurukshetra  
Full-Stack Developer

---

## 📄 License

This project is intended for learning and demonstration purposes.
