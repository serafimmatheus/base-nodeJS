import { Router } from "express";
import { productsControllers } from "../controllers";

export const router = Router();

router.get("", productsControllers.getProducts);

router.post("", productsControllers.createdProducts);

router.put("/:id", productsControllers.updetedProducts);

router.delete("/:id", productsControllers.deletedProducts);
