import express from "express";
import { productController } from "./product.controller";
const router = express.Router();

router.post("/products", productController.createProduct);
router.get("/products", productController.getProducts);
router.get("/products/:id", productController.getProduct);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);

export const productRoutes = router;
