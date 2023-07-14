import express from "express";
import { deleteProduct, getAll, getProducts, postProducts, update } from "../controller/products";
import { checkDiscount, deletediscountCode, getDiscountCodeAll, getdiscountCode, postdiscountCode, updatediscountCode } from "../controller/discountCode";
import { deleteCart, getAllCart, getCart, postCart, updateCart } from "../controller/cart";
const router = express.Router();
router.get("/products", getAll);
router.get("/products/:id", getProducts);
router.put("/products/:id", update);
router.post("/products", postProducts);
router.delete("/products/:id", deleteProduct);
router.post("/discount", postdiscountCode)
router.get("/discount/:id", getdiscountCode)
router.put("/discount/:id", updatediscountCode)
router.delete("/discount/:id", deletediscountCode)
router.get("/discount", checkDiscount)
router.get("/cart", getAllCart)
router.get("/cart/:id", getCart)
router.post("/cart", postCart)
router.put("/cart/:id", updateCart)
router.delete("/cart/:id", deleteCart)
export default router;
