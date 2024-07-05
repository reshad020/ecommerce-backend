import Product from "./product.model";
import { TProduct, TProductPartial } from "./product.type";
import {
  productValidationSchema,
  productValidationSchemaPartial,
} from "./product.validation";

const createProductIntoDB = async (product: TProduct) => {
  try {
    const validatedProduct = productValidationSchema.parse(product);
    console.log(validatedProduct);
    const newProduct = await Product.create(validatedProduct);
    return { data: newProduct };
  } catch (error) {
    console.error("create_Product_service_error", error);
    return { error: error };
  }
};

const getAllProducts = async (searchTerm?: string) => {
  try {
    if (searchTerm) {
      const regex = new RegExp(searchTerm, "i");
      const searchedItem = await Product.find({
        $or: [{ name: regex }, { description: regex }],
      }).exec();
      return { data: searchedItem };
    }

    const products = await Product.find();
    return { data: products };
  } catch (error) {
    console.log("get_all_products_service_error", error);
    return { error: error };
  }
};

const getProductByIdfromDB = async (id: string) => {
  try {
    const product = await Product.findById(id);
    if (!product) {
      throw new Error("No product found with this id!");
    }
    return { data: product };
  } catch (error) {
    console.log("get_product_by_Id_service_error", error);
    return { error: error };
  }
};

const updateProductInDB = async ({
  id,
  product,
}: {
  id: string;
  product: TProductPartial;
}) => {
  try {
    const validatedProduct = productValidationSchemaPartial.parse(product);
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: id },
      validatedProduct,
      { new: true }
    );
    if (!updatedProduct) {
      throw new Error("No product found with this id!");
    }
    return { data: updatedProduct };
  } catch (error) {
    console.log("update_product_by_Id_service_error", error);
    return { error: error };
  }
};
const deleteProductFromDB = async (id: string) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    return { data: null };
  } catch (error) {
    console.log("delete_product_by_Id_service_error", error);
    return { error: error };
  }
};

export const productServices = {
  createProductIntoDB,
  getAllProducts,
  getProductByIdfromDB,
  updateProductInDB,
  deleteProductFromDB,
};
