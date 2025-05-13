import { Request, Response } from "express";
import { createUserService } from "../services/user.services";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await createUserService(req.body);
    return res.status(201).json(user);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};
