import { Router } from "express";
import loginControllers from "../controllers/login.controllers";

export const router = Router();

router.post("", loginControllers.loginControllers);
