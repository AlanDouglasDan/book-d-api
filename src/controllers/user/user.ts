import { Request, Response } from "express";

import { updateUser } from "../../services/user";
import { catchAsync } from "../../helpers";

const put = catchAsync(async (req: Request, res: Response) => {
  const user = await updateUser(req.body, res.locals.decoded);
  return res.status(200).send({
    success: true,
    message: "User profile updated successfully.",
    data: user,
  });
});

export { put };
