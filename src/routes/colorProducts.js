import express from "express";
import { deleteColorProducts, getAllColorProducts, getColorProducts, updateColorProducts } from "../controller/colorProducts";
const router = express.Router();
router.get("colorProducts", getAllColorProducts)
router.get("/colorProducts/:id", getColorProducts)
router.put("/colorProducts/:id", updateColorProducts)
router.delete("/colorProducts/:id", deleteColorProducts)
export default router;