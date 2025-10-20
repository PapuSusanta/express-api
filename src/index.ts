import express from "express";
import cors from "cors";
import morgan from "morgan";

import type { NextFunction, Request, Response } from "express";
import type { CorsOptions } from "cors";

import { SERVER_CONFIG } from "@/config";
import v1Router from "@/routers/v1";
import { errorHandler } from "@/middlewares/errorHandler";
import { InternalServerError } from "@/errors/apiError";

const app = express();

const corsOptions: CorsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app
    .disable('x-powered-by')
    .use(express.static('public'))
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(morgan('dev'))
    .use(cors(corsOptions));

app.get('/health', (req: Request, res: Response, next: NextFunction) => {
    next(new InternalServerError('Simulated server error for testing purposes'));
});

app.use('/', v1Router);

app.use(errorHandler)

app.listen(SERVER_CONFIG.port, () => {
    console.log(`Server is running on http://localhost:${SERVER_CONFIG.port}`);
});