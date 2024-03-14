import moment from "moment";
import jwt from "jsonwebtoken";

const key = process.env.JWT_AUTH_SECRET || "mysecret";
import { userModel } from "../models/user";

// JWT Helpers
const generateToken = (
  _id: string,
  type: string,
  expiration: any,
  key: jwt.Secret
) => {
  const payload = {
    _id,
    iat: moment().unix(),
    exp: expiration.unix(),
    type,
  };

  return jwt.sign(payload, key);
};

export const generateLoginToken = (user: userModel) => {
  const { _id } = user;
  const accessExpiration = moment().add("1", "days");
  const accessToken = generateToken(_id, "access", accessExpiration, key);

  const refreshExpiration = moment().add("1", "days");
  const refreshToken = generateToken(_id, "refresh", refreshExpiration, key);

  return {
    access: {
      token: accessToken,
      expires: accessExpiration.local().format("YYYY-MM-DD HH:mm:ss"),
    },
    refresh: {
      token: refreshToken,
      expires: refreshExpiration.local().format("YYYY-MM-DD HH:mm:ss"),
    },
  };
};

export const verifyToken = (headers: any): any => {
  const token = headers.validateaccess.split(" ")[1];
  return jwt.verify(token, key);
};
