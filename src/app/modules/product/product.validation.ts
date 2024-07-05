import { z } from "zod";
const variantValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const inventoryValidationSchema = z.object({
  quantity: z.number().int().min(0),
  inStock: z.boolean(),
});
export const productValidationSchema = z.object({
  name: z.string().min(1, { message: "First Name is required" }),
  description: z.string().optional(),
  price: z.number().min(0, "Price must be a positive number"),
  category: z.string(),
  tags: z.array(z.string()).optional(),
  variants: z.array(variantValidationSchema).optional(),
  inventory: inventoryValidationSchema,
});
export const productValidationSchemaPartial = productValidationSchema.partial();
