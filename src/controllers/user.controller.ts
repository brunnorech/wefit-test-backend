import { Request, Response, NextFunction } from "express";
import { createUserService } from "../services/user.service";
import { createUserSchema } from "../validators/user.schema";

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validated = createUserSchema.parse(req.body);
    const user = await createUserService(validated);
    return res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};
