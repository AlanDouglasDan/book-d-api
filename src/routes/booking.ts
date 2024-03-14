import { Router } from "express";
import bookingController from "../controllers/booking";
import { validate, auth } from "../middlewares";
import { bookingValidation } from "../validation";

const router = Router();

router.post(
  "/",
  auth.verifyToken,
  validate(bookingValidation.add),
  bookingController.add
);

router.get(
  "/",
  auth.verifyToken,
  bookingController.get
);

router.patch(
  "/",
  auth.verifyToken,
  validate(bookingValidation.update),
  bookingController.update
);

router.delete(
  "/",
  auth.verifyToken,
  validate(bookingValidation.remove),
  bookingController.remove
);

export default router;
