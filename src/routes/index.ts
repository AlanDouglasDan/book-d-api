import express, { Request, Response, Router } from "express";

import authRoutes from "./auth";
import bookingRoutes from "./booking";
import notificationRoutes from "./notification";
import userRoutes from "./user";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Book-d Api 🚀 ");
});

router.use("/auth", authRoutes);

router.use("/booking", bookingRoutes);

router.use("/notifications", notificationRoutes);

router.use("/user", userRoutes);

export default router;
