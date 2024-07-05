import mongoose, { Schema } from "mongoose";
import { TOrder } from "./order.type";

const orderSchema = new Schema<TOrder>(
  {
    email: { type: String, required: true },
    productId: { type: Schema.Types.ObjectId, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model<TOrder>("Order", orderSchema);
export default Order;
