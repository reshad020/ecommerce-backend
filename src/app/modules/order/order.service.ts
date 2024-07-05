import Product from "../product/product.model";
import { TProduct } from "../product/product.type";
import Order from "./order.model";
import { TOrder } from "./order.type";
import { orderValidationSchema } from "./order.validation";

const createOrderInDB = async (order: TOrder) => {
  try {
    const validatedOrder = orderValidationSchema.parse(order);
    const orderedProduct = await Product.findById(order.productId);
    const available = orderedProduct?.inventory.quantity;
    if (available) {
      if (available >= order.quantity) {
        const newOrder = await Order.create(validatedOrder);
        const updateProduct = await Product.findByIdAndUpdate(order.productId, {
          "inventory.quantity": available - order.quantity,
          "inventory.inStock": available - order.quantity === 0 ? false : true,
        });
        return { data: newOrder };
      } else {
        throw new Error("Product not available");
      }
    }
  } catch (error) {
    console.log("create_order_sevice_error", error);
    return { error: error };
  }
};

const getAllOrderFromDB = async (email?: string) => {
  try {
    if (email) {
      const orderByEmail = await Order.find({ email });
      if (orderByEmail.length === 0) {
        throw new Error("No orders matches this email");
      }
      return { data: orderByEmail };
    }
    const orders = await Order.find();
    return { data: orders };
  } catch (error) {
    console.log("get_orders_service_error", error);
    return { error: error };
  }
};
export const orderServices = {
  createOrderInDB,
  getAllOrderFromDB,
};
