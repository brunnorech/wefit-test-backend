import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { HttpError } from "../utils/httpError";

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof ZodError) {
    const firstError = err.errors[0];
    return res.status(422).json({
      error: firstError?.message || "Erro de validação",
    });
  }

  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  console.error("Unexpected error:", err);

  return res.status(500).json({
    error: "Internal Server Error",
  });
};
