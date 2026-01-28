import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import productRoutes from "./router/product.router.js";
import cors from "cors";

dotenv.config();
let port = process.env.PORT || 7777;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://effortless-swan-877312.netlify.app/"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use("/api/products", productRoutes);

app.listen(port, () => {
  connectDb();
  console.log("server started");
});
