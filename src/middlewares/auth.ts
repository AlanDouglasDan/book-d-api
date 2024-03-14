import { NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models";
// import { trimUserDetails } from "../services/user";
import { getItem } from "../db/db-queries";
import logger from "../config/logger";

const key = process.env.JWT_AUTH_SECRET || "mysecret";

// This function decodes a jwt sent as a request header and sends back the decoded value in the response object
const verifyToken = (req: any, res: any, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).send({
      status: "error",
      message: "Please sign in or create an account",
    });
  }

  const tokenBearer = req.headers.authorization.split(" ")[1];

  const token = req.get("x-access-token") || tokenBearer || authorization;

  const decoded: any = jwt.verify(token, key);

  if (decoded) {
    const { _id } = decoded;
    const details = {
      Collection: User,
      find: { _id },
    };

    getItem(details)
      .then((user: any) => {
        // const clone = trimUserDetails(user);
        res.locals.decoded = user;
        next();
      })
      .catch((err: any) => {
        logger.error(err);
        return res.status(401).send({
          status: "error",
          message: "Please sign in or create an account",
        });
      });
  }
};

export default { verifyToken };
