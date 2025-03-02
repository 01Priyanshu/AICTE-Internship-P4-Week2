import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./DB/Database.js";
import transactionRoutes from "./Routers/Transactions.js";
import userRoutes from "./Routers/userRouter.js";

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 4000; // Use .env for port

connectDB(); // Connect to MongoDB

// Middleware
app.use(cors());
app.use(express.json()); 

// Routes
app.use("/api/v1", transactionRoutes);
app.use("/api/auth", userRoutes);

app.get("/", (req, res) => {
  res.send("FinManager Server is working");
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

