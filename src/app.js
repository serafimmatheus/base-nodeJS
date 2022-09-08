import express from "express";
import { router as productsRouter } from "./routes/products.routes";

const app = express();

app.use(express.json());

app.use("/produto", productsRouter);

const port = 5000;

app.listen(port, () => {
  console.log(`App rodando na porta ${port}...`);
});
