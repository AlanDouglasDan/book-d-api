import { Notifications } from "../../models";
import { addItem, getAllItems } from "../../db/db-queries";

export const createNotification = async (payload: any): Promise<any> => {
  const { body, userId } = payload;

  const details = {
    Collection: Notifications,
    data: { body, userId },
  };

  const newNotification = await addItem(details);

  return newNotification;
};

export const fetchNotifications = async (userId: string): Promise<any> => {
  console.log(userId);

  const details = {
    Collection: Notifications,
    find: { userId },
  };

  const notifications = await getAllItems(details);

  return notifications;
};
