import { ProductModel } from "../models/products.js";

export class ProductController {
  static getAllProducts = async (req, res) => {
    const { offset, limit, id, name, price, stock } = req.query;
    const products = await ProductModel.getAllProducts(
      offset,
      limit,
      id,
      name,
      price,
      stock,
    );
    if (!products) {
      return res.status(404).json({ message: "Products not found" });
    }
    res.json(products);
  };

  static getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await ProductModel.getProductById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  };

  static createProduct = async (req, res) => {
    const { name, price, stock } = req.body;
    const newProduct = { id: crypto.randomUUID(), name, price, stock };
    const product = await ProductModel.createProduct(newProduct);
    if (!product) {
      return res.status(500).json({ message: "Failed to create product" });
    }
    res.status(201).json(product);
  };

  static updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, stock } = req.body;
    const product = await ProductModel.updateProduct(id, {
      name,
      price,
      stock,
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  };

  static deleteProduct = async (req, res) => {
    const { id } = req.params;
    const product = await ProductModel.deleteProduct(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    if (product !== true) {
      return res.status(500).json({ message: "Failed to delete product" });
    }
    res.status(204).json({ message: "Product deleted successfully" });
  };
}
