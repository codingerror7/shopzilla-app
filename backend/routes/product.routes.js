import express from "express";
import mongoose from "mongoose";
import Product from "../model/product.model.js";

    const router = express.Router();
        router.get('/all',async (req,res)=>{
        try {
            let product = await Product.find({});
            console.log(product);
            return res.status(200).json(product);
        } catch (error) {
            console.log(error)
            return res.status(500).json({message : `${error}`});
        }
    })


    router.get("/:category",async (req,res)=>{
        try {
            const {category} = req.params;
            const product = await Product.find({category: new RegExp(`^${category}$`, "i")});
            console.log(product);
            //if(product.length===0){
            //    return res.status(400).json({message : "Product not found"});
            //}
            return res.status(200).json(product);
        } catch (error) {
            console.log("error is:",error);
            return res.status(500).json({message : "error"});
        }
    })

    export default router