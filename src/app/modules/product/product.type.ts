import { z } from "zod";
import {
  productValidationSchema,
  productValidationSchemaPartial,
} from "./product.validation";

export type TProduct = z.infer<typeof productValidationSchema>;
export type TProductPartial = z.infer<typeof productValidationSchemaPartial>;
