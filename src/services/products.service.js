import { v4 as uuid } from "uuid";
import products from "../database";

class ProductsService {
  createdProductsServices = (body) => {
    const { name, description, price } = body;

    const productAlreadyExist = products.find((prod) => prod.name === name);

    if (productAlreadyExist) {
      return "message: Produto já existente...";
    }

    const newProduts = {
      id: uuid(),
      name,
      description,
      price,
    };

    products.push(newProduts);

    return newProduts;
  };

  updatedProductsServices = (id, name, description, price) => {
    const updatedProduct = {
      id,
      name,
      description,
      price,
    };

    const productIndex = products.findIndex((elem) => elem.id === id);

    if (productIndex === -1) {
      return "Produto não encontrado!";
    }

    products[productIndex] = { ...products[productIndex], ...updatedProduct };

    return products[productIndex];
  };

  deletedProductsServices = (id) => {
    const productIndex = products.findIndex((elem) => elem.id === id);

    if (productIndex === -1) {
      return "Produto não encontrado!";
    }

    products.splice(productIndex, 1);

    return products[productIndex];
  };
}

export default new ProductsService();
