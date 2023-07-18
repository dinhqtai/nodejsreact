import express from "express";
import { checkDiscount, deletediscountCode, getAllDiscountCode, getdiscountCode, postdiscountCode, searchNameDiscount, updatediscountCode } from "../controller/discountCode";
const router = express.Router();
router.post("/discount", postdiscountCode)
router.get("/discount/:id", getdiscountCode)
router.put("/discount/:id", updatediscountCode)
router.delete("/discount/:id", deletediscountCode)
router.post("/checkDiscount", checkDiscount)
router.post("/searchNameDiscount", searchNameDiscount)
router.get("/discount", getAllDiscountCode)
export default router;