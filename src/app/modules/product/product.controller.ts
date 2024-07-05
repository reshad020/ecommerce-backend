import { Request, Response } from "express";
import { productServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await req.body;
    const response = await productServices.createProductIntoDB(product);
    if (!response) {
      res.status(500).json({
        success: false,
        message: "Product creation failed",
      });
    }
    if (response.error) {
      res.status(500).json({
        success: false,
        message: response.error,
      });
    }
    res.status(200).json({
      success: true,
      message: "Product created Successfully",
      data: response,
    });
  } catch (error) {
    console.log("create_student_controller_error", error);
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    if (searchTerm) {
      const response = await productServices.getAllProducts(
        searchTerm as string
      );
      res.status(200).json({
        success: true,
        message: `Products matching search term ${searchTerm} fetched successfully!`,
        data: response.data,
      });
    }
    const response = await productServices.getAllProducts();
    if (!response) {
      res.status(400).json({
        success: false,
        message: "No Products found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Products retrived Succcessfully",
      data: response.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};

const getProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await productServices.getProductByIdfromDB(id);
    if (response.error) {
      res.status(400).json({
        success: false,
        message: "No Product found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Product by Id retrived Succcessfully",
      data: response.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await req.body;
    const response = await productServices.updateProductInDB({ id, product });
    if (!response) {
      res.status(500).json({
        success: false,
        message: "Product update failed",
      });
    }
    if (response.error) {
      res.status(500).json({
        success: false,
        message: response.error,
      });
    }
    res.status(200).json({
      success: true,
      message: "Product updated Successfully",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await productServices.deleteProductFromDB(id);
    if (response.error) {
      res.status(500).json({
        success: false,
        message: response.error,
      });
    }
    res.status(200).json({
      success: true,
      message: "Product deleted Successfully",
      data: response.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};

export const productController = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
