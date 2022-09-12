import { Router } from "express";

import { usersControllers } from "../controllers";

import emailAlreadyExistsMiddleware from "../middlewares/emailAlreadExists.middleware";
import tokenAlreadyExistsMiddleware from "../middlewares/tokenAlreadExists.middleware";
import userNotFoundMiddleware from "../middlewares/userNotFound.middleware";

export const router = Router();

router.get(
  "",
  tokenAlreadyExistsMiddleware,
  usersControllers.getUsersControllers
);

router.post(
  "",
  emailAlreadyExistsMiddleware,
  usersControllers.createUsersControllers
);

router.put(
  "/:id",
  tokenAlreadyExistsMiddleware,
  userNotFoundMiddleware,
  usersControllers.updatedUsersControllers
);

router.delete(
  "/:id",
  tokenAlreadyExistsMiddleware,
  userNotFoundMiddleware,
  usersControllers.deletedUsersControllers
);
