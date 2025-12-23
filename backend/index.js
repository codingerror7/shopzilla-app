import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.config.js";
import authRouter from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js"
import cartRoutes from './routes/cart.routes.js'
import buyRoutes from './routes/buy.routes.js'
import cookieParser from "cookie-parser";
const app = express();
//CONFIGURING .ENV FILE
dotenv.config();
//CROSS-ORIGIN RESOURCE SHARING
app.set("trust proxy", 1);

app.use(cors({
  origin: "https://shopzilla-app-4ray.onrender.com",
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());
//CONNECTING ROUTES
app.use("/api/auth",authRouter);
app.use("/api/product",productRoutes);
app.use("/api",cartRoutes);
app.use("/api/order",buyRoutes);

app.get("/",(req,res)=>{
    res.send("Shopzilla");
});
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    connectDB();
    console.log(`listening at ${port}`);
});