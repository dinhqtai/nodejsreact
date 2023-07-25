import express from "express";
import {
  createColor,
  delColor,
  editColor,
  getAllColor,
  getOneColor,
} from "../controller/color";

const router = express.Router();

router.get("/colors", getAllColor);

router.get("/colors/:id", getOneColor);

router.post("/colors", createColor);

router.put("/colors/:id", editColor);

router.delete("/colors/:id", delColor);

export default router;
