import { Router } from "express";
import authController from "../controllers/auth";
import { validate } from "../middlewares";
import { authValidation } from "../validation";

const router = Router();

router.post(
  "/register",
  validate(authValidation.register),
  authController.register
);

router.post("/login", validate(authValidation.login), authController.login);

export default router;
