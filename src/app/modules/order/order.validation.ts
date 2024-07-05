import mongoose from "mongoose";
import { z } from "zod";
export const orderValidationSchema = z.object({
  email: z.string().email(),
  productId: z.custom<mongoose.Types.ObjectId>(),
  price: z.number(),
  quantity: z.number(),
});
