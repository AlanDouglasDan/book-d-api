import { Router } from "express";
import userController from "../controllers/user";
import { validate, auth } from "../middlewares";
import { userValidation } from "../validation";

const router = Router();

router.put(
  "/",
  auth.verifyToken,
  validate(userValidation.put),
  userController.put
);

// router.get("/", auth.verifyToken, userController.get);

export default router;
