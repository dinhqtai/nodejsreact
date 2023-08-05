import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js";
import routerProducts from "./routes/products.js";
import routerDiscountCode from "./routes/discountCode.js";
import routerCategory from "./routes/category.js";
import routerColorProducts from "./routes/colorProducts.js";
import routerDataProducts from "./routes/dataProducts.js";
import routerQuantilyProducts from "./routes/quantily.js";
import routerHistory from "./routes/history.js";
import routerCart from "./routes/cart.js";
//config
const app = express();
const API_DB = process.env.API_DB;
dotenv.config();

// middleware
app.use(cors());
app.use(express.json());
app.use("/api", routerDiscountCode)
app.use("/api", routerProducts)
app.use("/api", routerCategory)
app.use("/api", routerColorProducts)
app.use("/api", routerDataProducts)
app.use("/api", routerQuantilyProducts)
app.use("/api", routerHistory)
app.use("/api", routerCart)
// router
app.use("/api", router);

// database config
mongoose.connect(API_DB);
export const viteNodeApp = app;
