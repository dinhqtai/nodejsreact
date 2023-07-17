import express from "express";
import { checkDiscount, deletediscountCode, getdiscountCode, postdiscountCode, updatediscountCode } from "../controller/discountCode";
const router = express.Router();
router.post("/discount", postdiscountCode)
router.get("/discount/:id", getdiscountCode)
router.put("/discount/:id", updatediscountCode)
router.delete("/discount/:id", deletediscountCode)
router.get("/discount", checkDiscount)
export default router;