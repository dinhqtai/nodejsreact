import express from "express";
import { deleteProduct, getAll, getProducts, postProducts, searchProductsCategory, searchProductsName, searchProductsPriceMax, searchProductsPriceMin, update } from "../controller/products";
const router = express.Router();
router.post("/searchName", searchProductsName)
router.post("/searchPriceMin", searchProductsPriceMin)
router.post("/searchPriceMax", searchProductsPriceMax)
router.post("/searchProductCategory", searchProductsCategory)
router.get("/products", getAll);
router.get("/products/:id", getProducts);
router.put("/products/:id", update);
router.post("/products", postProducts);
router.delete("/products/:id", deleteProduct);
export default router;
