import { z } from "zod";
import { orderValidationSchema } from "./order.validation";
export type TOrder = z.infer<typeof orderValidationSchema>;
