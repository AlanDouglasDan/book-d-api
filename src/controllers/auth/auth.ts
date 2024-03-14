import { Request, Response } from "express";

import { createUser, authenticateUser } from "../../services/auth";
import { catchAsync } from "../../helpers";

const register = catchAsync(async (req: Request, res: Response) => {
  const user = await createUser(req.body);
  return res.status(201).send({
    success: true,
    message: "User account created successfully.",
    data: user,
  });
});

const login = catchAsync(async (req: Request, res: Response) => {
  const payload = await authenticateUser(req.body);
  return res.status(200).send({
    success: true,
    message: "Login Successful",
    data: payload,
  });
});

export { register, login };
