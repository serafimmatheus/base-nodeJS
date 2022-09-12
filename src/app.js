import express from "express";
import { init_app } from "./routes";

const app = express();

app.use(express.json());

init_app(app);

const port = 5000;

app.listen(port, () => {
  console.log(`App rodando na porta ${port}...`);
});
