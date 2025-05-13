import { Request, Response, NextFunction } from "express";
import { createUserSchema } from "../validators/user.schema";
import { CreateUserUseCase } from "../usecases/create-user.usecase";

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = createUserSchema.parse(req.body);
    const useCase = new CreateUserUseCase();
    const user = await useCase.execute(data);
    return res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};
