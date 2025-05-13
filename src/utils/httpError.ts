// utils/httpError.ts
export class HttpError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
    this.name = "HttpError";

    Object.setPrototypeOf(this, HttpError.prototype);
  }
}
