import mongoose, { Schema, Model } from "mongoose";

export interface fields {
  id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  body: string;
}

export type notificationModel = mongoose.Document & fields;

const notificationSchema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      autopopulate: true,
      ref: "Users",
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

notificationSchema.plugin(require("mongoose-autopopulate"));

const Notification: Model<notificationModel> =
  mongoose.model<notificationModel>("Notifications", notificationSchema);

export default Notification;
