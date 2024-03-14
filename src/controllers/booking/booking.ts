import { Request, Response } from "express";

import {
  createBooking,
  fetchBookings,
  updateBooking,
  removeBooking,
} from "../../services/booking";
import { catchAsync } from "../../helpers";

const add = catchAsync(async (req: Request, res: Response) => {
  const booking = await createBooking(req.body, res.locals.decoded._id);
  return res.status(201).send({
    success: true,
    message: "Booking placed successfully.",
    data: booking,
  });
});

const get = catchAsync(async (req: Request, res: Response) => {
  const response = await fetchBookings(res.locals.decoded._id);

  return res.status(200).send({
    success: true,
    message: "Bookings fetched successfully",
    data: response,
  });
});

const update = catchAsync(async (req: Request, res: Response) => {
  const response = await updateBooking(req.body, res.locals.decoded._id);

  return res.status(200).send({
    success: true,
    message: "Booking updated successfully",
    data: response,
  });
});

const remove = catchAsync(async (req: Request, res: Response) => {
  const response = await removeBooking(req.body, res.locals.decoded._id);

  return res.status(200).send({
    success: true,
    message: "Booking deleted successfully",
    data: response,
  });
});

export { add, get, update, remove };
