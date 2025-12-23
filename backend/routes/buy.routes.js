import express from "express";
import Order from "../model/buy.model.js";
import Product from "../model/product.model.js";
import Razorpay from 'razorpay'
import dotenv from 'dotenv'
const router = express.Router();

router.post("/create-payment", async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.TEST_KEY,
      key_secret: process.env.TEST_SECRET,
    });

    const razorOrder = await razorpay.orders.create({
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: "receipt_order_1",
    });

    const updateOrder = await Order.findByIdAndUpdate(
      req.body.orderId,
      { razorpayOrderId: razorOrder.id },
      { new: true }
    );

    res.json({
      razorpayOrderId: razorOrder.id,
      amount: razorOrder.amount,
      order: updateOrder
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/confirm", async (req, res) => {
  const { orderId, paymentId } = req.body;

  const order = await Order.findByIdAndUpdate(
    orderId,
    { status: "Paid", paymentId },
    { new: true }
  );

  res.json(order);
});



router.post("/buy-now", async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const order = await Order.create({
      userId,
      products: [{ productId, quantity }],
      total: product.price * quantity,
      status: "Pending",
    });

    res.json({ message: "Order created", order });

  } catch (error) {
    res.status(500).json({ message: "Order error", error });
  }
});


// GET ORDER BY USER
router.get("/:orderId", async (req, res) => {
  try {
    const { orderId } = req.params;
    const orders = await Order.findById(orderId).populate("products.productId").populate("userId");
    if (!orders) return res.status(404).json({ message: "Order not found" });

    res.json(orders);

  } catch (error) {
    res.status(500).json({ message: "Fetch order error", error });
  }
});

export default router;