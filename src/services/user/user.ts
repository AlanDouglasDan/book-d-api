import { User } from "../../models";
import { updateItem, getItem } from "../../db/db-queries";
import { ApiError } from "../../helpers";

export const updateUser = async (
  payload: any,
  userId: string
): Promise<any> => {
  const { email } = payload;

  const details = {
    Collection: User,
    find: { _id: userId, email },
    update: { ...payload },
  };

  console.log(details);

  const user = await getItem(details);
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const newNotification = await updateItem(details);

  return newNotification;
};
