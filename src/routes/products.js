import express from "express";
import { deleteProduct, getAll, getProducts, postProducts, searchProductsCategory, searchProductsName, searchProductsPriceMax, searchProductsPriceMin, update } from "../controller/products";
const router = express.Router();
router.get("/searchName", searchProductsName)
router.get("/searchPriceMin", searchProductsPriceMin)
router.get("/searchPriceMax", searchProductsPriceMax)
router.get("/searchProductCategory", searchProductsCategory)
router.get("/products", getAll);
router.get("/products/:id", getProducts);
router.put("/products/:id", update);
router.post("/products", postProducts);
router.delete("/products/:id", deleteProduct);
export default router;
