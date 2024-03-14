import { Request, Response } from "express";

import {
  createNotification,
  fetchNotifications,
} from "../../services/notification";
import { catchAsync } from "../../helpers";

const add = catchAsync(async (req: Request, res: Response) => {
  const booking = await createNotification(req.body);
  return res.status(201).send({
    success: true,
    message: "Notification created successfully.",
    data: booking,
  });
});

const get = catchAsync(async (req: Request, res: Response) => {
  console.log("hi");
  const response = await fetchNotifications(res.locals.decoded._id);

  return res.status(200).send({
    success: true,
    message: "Notifications fetched successfully",
    data: response,
  });
});

export { add, get };
