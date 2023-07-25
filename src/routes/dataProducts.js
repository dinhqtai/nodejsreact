import express from "express";
import { deleteDataProducts, getAllDataProducts, getDataProducts, updateDataProducts } from "../controller/dataProducts";
const router = express.Router();
router.get("/dataProducts", getAllDataProducts)
router.get("/dataProducts/:id", getDataProducts)
router.put("/dataProducts/:id", updateDataProducts)
router.delete("/dataProducts/:id", deleteDataProducts)
export default router;