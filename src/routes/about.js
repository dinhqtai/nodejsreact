import express from "express";
import { deleteAbouts, getAll, getAbouts, postAbouts, searchAboutsName ,updateAbouts } from "../controller/about";
const router = express.Router();
router.get("/searchName", searchAboutsName)
router.get("/abouts", getAll);
router.get("/abouts/:id", getAbouts);
router.put("/abouts/:id", updateAbouts);
router.post("/abouts", postAbouts);
router.delete("/abouts/:id", deleteAbouts);
export default router;