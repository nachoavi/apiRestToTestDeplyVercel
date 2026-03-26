import data from "../data/data.json" with { type: "json" };

let products = data.products;

export class ProductModel {
  static getAllProducts = async (id, name, price, stock) => {
    if (id) {
      return products.find((product) => product.id === Number(id));
    }
    if (name) {
      return products.find((product) => product.name === name);
    }
    if (price) {
      return products.find((product) => product.price === price);
    }
    if (stock) {
      return products.find((product) => product.stock === stock);
    }
    return products;
  };

  static getProductById = async (id) => {
    return products.find((product) => product.id === Number(id));
  };

  static createProduct = async (product) => {
    products.push(product);
    return product;
  };

  static updateProduct = async (id, product) => {
    const index = products.findIndex((p) => p.id === Number(id));
    if (index !== -1) {
      products[index] = product;
      return product;
    }
    return null;
  };

  static deleteProduct = async (id) => {
    const index = products.findIndex((p) => p.id === Number(id));
    if (index !== -1) {
      products.splice(index, 1);
      return true;
    }
    return false;
  };
}
