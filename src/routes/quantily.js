import express from "express";
import { deleteQuantilyProducts, getAllQuantilyProducts, getQuantilyProducts, updateQuantilyProducts } from "../controller/quantily";
const router = express.Router();
router.get("quantilyProducts", getAllQuantilyProducts)
router.get("/quantilyProducts/:id", getQuantilyProducts)
router.put("/quantilyProducts/:id", updateQuantilyProducts)
router.delete("/quantilyProducts/:id", deleteQuantilyProducts)
export default router;