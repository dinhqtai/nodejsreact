import express from "express";
import { deleteHistory, getAllHistory, postAndUpdateHistoryUser, getHistoryByUser, updateHistory, getHistoryById } from "../controller/history";
const router = express.Router();
router.get("/history", getAllHistory)
router.get("/history/:id", getHistoryById)
router.post("/getHistoryByUser", getHistoryByUser)
router.put("/history/:id", updateHistory)
router.post("/postAndUpdateHistoryUser", postAndUpdateHistoryUser)
router.delete("/history/:id", deleteHistory)

export default router;