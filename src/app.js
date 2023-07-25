import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js";
import routerProducts from "./routes/products.js";
import routerDiscountCode from "./routes/discountCode.js";
import routerCategory from "./routes/category.js";
import routerColors from "./routes/color.js";
//config
const app = express();
const API_DB = process.env.API_DB;
dotenv.config();

// middleware
app.use(cors());
app.use(express.json());
app.use("/api", routerDiscountCode);
app.use("/api", routerProducts);
app.use("/api", routerCategory);
// router
app.use("/api", routerColors);
app.use("/api", router);

// database config
mongoose.connect(API_DB);
export const viteNodeApp = app;
