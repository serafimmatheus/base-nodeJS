import products from "../database";
import { productsService } from "../services";

class ProductsControllers {
  getProducts = (__, res) => {
    res.status(200).json(products);
  };

  createdProducts = (req, res) => {
    const newProduct = productsService.createdProductsServices(req.body);

    res.status(201).json(newProduct);
  };

  updetedProducts = (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;

    const updetedProduct = productsService.updatedProductsServices(
      id,
      name,
      description,
      price
    );

    return res.status(200).json(updetedProduct);
  };

  deletedProducts = (req, res) => {
    const { id } = req.params;
    const productDeleted = productsService.deletedProductsServices(id);

    return res.status(204).json(productDeleted);
  };
}

export default new ProductsControllers();
