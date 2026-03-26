import { Router } from "express";
import { ProductController } from "../controllers/products.js";

export const productsRouter = Router();

productsRouter.get("/", ProductController.getAllProducts);
productsRouter.get("/:id", ProductController.getProductById);
productsRouter.post("/", ProductController.createProduct);
productsRouter.put("/:id", ProductController.updateProduct);
productsRouter.delete("/:id", ProductController.deleteProduct);
