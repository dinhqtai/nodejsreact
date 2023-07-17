import express from "express";
import { deleteCart, getAllCart, getCart, postCart, updateCart } from "../controller/cart";
const router = express.Router();
router.get("/cart", getAllCart)
router.get("/cart/:id", getCart)
router.post("/cart", postCart)
router.put("/cart/:id", updateCart)
router.delete("/cart/:id", deleteCart)
export default router;