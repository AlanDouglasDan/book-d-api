import { Router } from "express";
import notificationController from "../controllers/notification";
import { validate, auth } from "../middlewares";
import { notificationValidation } from "../validation";

const router = Router();

router.post(
  "/",
  validate(notificationValidation.add),
  notificationController.add
);

router.get("/", auth.verifyToken, notificationController.get);

export default router;
