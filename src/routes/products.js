import express from "express";
import { deleteProduct, getAll, getProducts, postProducts, searchProducts, searchProductsCategory, searchProductsCategoryDetail, searchProductsName, searchProductsNameOne, searchProductsPrice, searchProductsPriceMax, searchProductsPriceMin, searchProductsPriceSort, update } from "../controller/products";
const router = express.Router();
router.post("/searchProductsName", searchProductsName)
router.post("/searchProductsNameOne", searchProductsNameOne)
router.post("/searchPrice", searchProductsPrice)
router.post("/searchPriceMin", searchProductsPriceMin)
router.post("/searchPriceMax", searchProductsPriceMax)
router.post("/searchProducts", searchProducts)
router.get("/searchPriceSort", searchProductsPriceSort)
router.post("/searchProductCategory", searchProductsCategory)
router.post("/searchProductCategoryDetail", searchProductsCategoryDetail)
router.get("/products", getAll);
router.get("/products/:id", getProducts);
router.put("/products/:id", update);
router.post("/products", postProducts);
router.delete("/products/:id", deleteProduct);
export default router;
