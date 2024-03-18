import { Booking } from "../../models";
import {
  getItem,
  addItem,
  getAllItems,
  updateItem,
  deleteItem,
} from "../../db/db-queries";
import { ApiError } from "../../helpers";
import { createNotification } from "../notification";

export const createBooking = async (
  body: any,
  userId: string
): Promise<any> => {
  const { date, time } = body;

  const details = {
    Collection: Booking,
    find: { date, time },
    data: { date, time, userId },
  };
  const existingBooking = await getItem(details);
  if (existingBooking) {
    throw new ApiError(409, "Date Already reserved");
  }

  await createNotification({
    body: `Appointment confirmation for ${date} by ${time}`,
    userId,
  });

  const newBooking = await addItem(details);

  return newBooking;
};

export const fetchBookings = async (userId: string): Promise<any> => {
  const details = {
    Collection: Booking,
    find: { userId },
    sort: { createdAt: -1 },
  };

  const bookings = await getAllItems(details);

  return bookings;
};

export const updateBooking = async (
  body: any,
  userId: string
): Promise<any> => {
  const { date, time, id } = body;

  const details = {
    Collection: Booking,
    find: { _id: id, userId },
    update: { date, time },
  };
  const existingBooking = await getItem(details);
  if (!existingBooking) {
    throw new ApiError(404, "Booking history not found");
  }

  const newBooking = await updateItem(details);

  return newBooking;
};

export const removeBooking = async (
  body: any,
  userId: string
): Promise<any> => {
  const { id } = body;

  const details = {
    Collection: Booking,
    find: { _id: id, userId },
  };
  const existingBooking = await getItem(details);
  if (!existingBooking) {
    throw new ApiError(404, "Booking history not found");
  }

  const removedBooking = await deleteItem(details);

  return removedBooking;
};
