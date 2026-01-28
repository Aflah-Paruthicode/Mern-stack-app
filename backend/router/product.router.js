import express from "express";
import { getProducts, addProduct, editProduct, deleteProduct, adminLogin } from "../controller/product.controller.js";
import { verifyAdmin } from "../middlewares/verifyAdmin.js";

const router = express.Router();

router.post("/login", adminLogin);

router.get("/", getProducts);

router.post("/", verifyAdmin, addProduct);

router.put("/:id", verifyAdmin, editProduct);

router.delete("/:id", verifyAdmin, deleteProduct);

export default router;
