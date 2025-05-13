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
    return res.status(400).json({
      error: "Validation error",
      details: err.errors,
    });
  }

  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  console.log("err.constructor.name:", err.constructor?.name);
  console.log(JSON.stringify(err));
  console.log("err instanceof HttpError:", err instanceof HttpError);
  //   console.error("Unexpected error:", err);

  return res.status(500).json({
    error: "Internal Server Error",
  });
};
