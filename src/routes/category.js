import express from "express";
import { deleteCategory, getAll, getCategory, postCategory, searchCategory, updateCategory } from "../controller/category";

const router = express.Router();
router.get("/searchCategory", searchCategory)
router.get("/category/:id", getCategory);
router.get("/category", getAll);
router.put("/category/:id", updateCategory);
router.post("/category", postCategory);
router.delete("/category/:id", deleteCategory);
export default router;
