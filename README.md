# AICTE-Internship-P4-Week2

# FinManager - Backend

## 📌 Project Overview
FinManager is a financial management backend service built with Node.js, Express, and MongoDB. It provides APIs for managing user authentication and financial transactions.

---

## 🚀 Features
- User Authentication (Login/Signup)
- CRUD Operations for Transactions
- Secure MongoDB Database Connection
- Environment Variable Support (`.env`)
- Global Error Handling

---

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Authentication**: JSON Web Tokens (JWT)
- **Environment Management**: dotenv

---

## 📂 Project Structure
```
AICTE-Internship-P4-Week2/
│── DB/
│   ├── Database.js
│── Routers/
│   ├── Transactions.js
│   ├── userRouter.js
│── models/
│── middleware/
│── app.js
│── .env
│── package.json
│── README.md
```

---

## 🔧 Setup Instructions

### 1️⃣ Clone the Repository
```sh
git clone <repository_url>
cd AICTE-Internship-P4-Week2
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add:
```
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/finmanager
```

### 4️⃣ Start the Server
**For normal execution:**
```sh
npm start
```

**For development mode (auto-restart on changes):**
```sh
npm run dev
```

---

## 🔗 API Endpoints
| Method | Endpoint             | Description               |
|--------|----------------------|---------------------------|
| GET    | `/`                  | Check server status       |
| POST   | `/api/auth/signup`   | User registration         |
| POST   | `/api/auth/login`    | User login                |
| GET    | `/api/v1/transactions` | Fetch all transactions |
| POST   | `/api/v1/transactions` | Add a new transaction |

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 📩 Contact
For any inquiries, reach out via email or create an issue on GitHub.

---

### 🎯 Happy Coding! 🚀
