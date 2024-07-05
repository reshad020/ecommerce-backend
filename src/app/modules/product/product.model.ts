import mongoose, { Schema } from "mongoose";
import { TProduct } from "./product.type";

const variantSchema = new Schema({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const inventorySchema = new Schema({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [1, "Name must be at least 1 character"],
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price must be a non-negative number"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  tags: {
    type: [String],
  },
  variants: [variantSchema],
  inventory: {
    type: inventorySchema,
    required: true,
  },
});

const Product = mongoose.model<TProduct>("Product", productSchema);
export default Product;
