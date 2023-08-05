import express from "express";
import { deleteHistory, getAllHistory, getHistory, postHistory, updateHistory } from "../controller/history";
const router = express.Router();
router.get("history", getAllHistory)
router.get("/history/:id", getHistory)
router.put("/history/:id", updateHistory)
router.post("/history/:id", postHistory)
router.delete("/history/:id", deleteHistory)
export default router;