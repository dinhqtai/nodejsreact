import express from "express";
import { getUser, getUserAll, putUser, signin, signup } from "../controller/user";
import { getIdAdmin, signinAdmin, signupAdmin } from "../controller/admin";

const router = express.Router();
router.post("/signup", signup);
router.post("/signin", signin);
router.get("/users", getUserAll);
router.get("/user/:id", getUser);
router.put("/user/:id", putUser);
router.post("/admin/signin", signinAdmin);
router.post("/admin/signup", signupAdmin);
router.get("/admin/:id", getIdAdmin);
export default router;
