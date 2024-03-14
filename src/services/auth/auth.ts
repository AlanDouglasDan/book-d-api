import { User } from "../../models";
import { getItem, addItem } from "../../db/db-queries";
import { ApiError } from "../../helpers";
import { generateLoginToken } from "../../utilities";

export const createUser = async (userDetails: any): Promise<any> => {
  if (!userDetails.email && !userDetails.phone)
    throw new ApiError(400, "Email Address or Phone Number is required");

  const details = {
    Collection: User,
    find: { email: userDetails.email },
    data: userDetails,
  };
  const user = await getItem(details);
  if (user) {
    throw new ApiError(409, "User already exists");
  }

  const newUser = await addItem(details);

  return newUser;
};

export const authenticateUser = async (body: any): Promise<any> => {
  const { email, password } = body;

  // Check if user exists
  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(401, "The information used to login is not correct.");
  }

  if (!(user.password === password)) {
    throw new ApiError(401, "The information used to login is not correct.");
  }

  const token = generateLoginToken(user);

  return { userDetails: user, token };
};
