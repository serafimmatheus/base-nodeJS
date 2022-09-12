import { router as productsRouter } from "./products.routes";
import { router as userRouter } from "./users.routes";
import { router as loginRouter } from "./login.routes";

export const init_app = (app) => {
  app.use("/produto", productsRouter);
  app.use("/user", userRouter);
  app.use("/login", loginRouter);
};
