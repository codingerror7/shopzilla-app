import express from 'express'
import User from '../model/auth.model.js'
import Product from '../model/product.model.js'
import Cart from '../model/cart.model.js'

const router = express.Router();
router.post("/add-to-cart", async (req,res)=>{
    const {userId,productId} = req.body;
    try {
        const cart = await Cart.findOne({userId});
        if(!cart){
            let cart = await Cart.create({
                userId,
                products : [{productId,quantity : 1}]
            })
        }
        else {
            const item = await cart.products.find(
                (p)=>p.productId.toString()===productId
            )
            if(item){
                item.quantity += 1;
            }
            else{
                cart.products.push({productId,quantity : 1});
            }

        }
        await cart.save();
        return res.status(200).json({cart});
    } catch (error) {
        console.log("error",error);
        res.status(500).json({message : "item not added",error});
    }
})


router.get("/cart/:userId",async (req,res)=>{
    const {userId} = req.params;
    try {
         const cart = await Cart.findOne({userId}).populate("products.productId");
        if(!cart){
            return res.status(400).json([]);
        }
        return res.status(200).json(cart.products);
    } catch (error) {
        return res.status(500).json({message : "No-one found..",error});
    }
})

export default router