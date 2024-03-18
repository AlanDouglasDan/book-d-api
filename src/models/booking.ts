import mongoose, { Schema, Model } from "mongoose";

export interface fields {
  id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  date: string;
  startTime: string;
  endTime: string;
}

export type bookingModel = mongoose.Document & fields;

const bookingSchema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      autopopulate: true,
      ref: "Users",
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

bookingSchema.plugin(require("mongoose-autopopulate"));

const Booking: Model<bookingModel> = mongoose.model<bookingModel>(
  "Bookings",
  bookingSchema
);

export default Booking;
