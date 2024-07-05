import { Request, Response } from "express";
import { orderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = await req.body;
    const response = await orderServices.createOrderInDB(order);
    if (response.error) {
      res.status(500).json({
        success: false,
        message: "order creation failed",
        data: response.error,
      });
    }
    res.status(200).json({
      success: true,
      message: "Order created successfully",
      data: response.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "order failed",
      error: error,
    });
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    if (email) {
      const response = await orderServices.getAllOrderFromDB(email as string);
      if (response.error) {
        res.status(500).json({
          success: false,
          message: "failed to fetch orders with this email Id",
          error: response.error,
        });
      }
      res.status(200).json({
        success: true,
        message: "Orders retreived successfully for user emai!",
        data: response.data,
      });
    }
    const response = await orderServices.getAllOrderFromDB();

    if (response.error) {
      res.status(500).json({
        success: false,
        message: "Could not get orders!",
        error: response.error,
      });
    }
    res.status(200).json({
      success: true,
      message: "Orders retreived successfully",
      data: response.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "order failed",
      error: error,
    });
  }
};
export const orderControllers = {
  createOrder,
  getOrders,
};
