import express from "express";
import { deleteCategory, getAll, postCategory, searchCategory, updateCategory } from "../controller/category";

const router = express.Router();
router.get("/searchCategory", searchCategory)
router.get("/category/:id", getAll);
router.put("/category/:id", updateCategory);
router.post("/category", postCategory);
router.delete("/category/:id", deleteCategory);
export default router;
