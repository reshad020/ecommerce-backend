import express, { Request, Response } from "express";
import cors from "cors";
import { productRoutes } from "./app/modules/product/product.route";

// express
const app = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api", productRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
