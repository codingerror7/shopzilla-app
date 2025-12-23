import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
    }
  ],
  total: Number,
  status: { type: String, default: "Pending" }
});

const Order = mongoose.model("Order", orderSchema);
export default Order
