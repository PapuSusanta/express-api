import CustomError from "@/errors/customError";
import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (err instanceof CustomError) {
        return res.status(err.StatusCode).json({ errors: err.serializeErrors() });
    }
    res.status(500).json({ errors: { message: 'Something went wrong' } });
}