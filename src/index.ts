/*
* NODE MODULES
*/
import express from "express";
import userRouter from "@/endpoint/users";
import cors from "cors";
import morgan from "morgan";

/*
* CUSTOM MODULES
*/
import { SERVER_CONFIG } from "@/config";
import pool from "@/config/pgConfig";

/*
 * Import types
 */
import type { Request, Response } from "express";
import type { CorsOptions } from "cors";

const app = express();

const corsOptions: CorsOptions = {
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

// Enable CORS with the specified options

app
    .disable('x-powered-by')
    .use(express.static('public'))
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(morgan('dev'))
    .use(cors(corsOptions));

app.get('/', async (req: Request, res: Response) => {
    const result = await pool.query('select current_database();');
    res.json({ database: result.rows[0].current_database });
});

app.get('/health', (req: Request, res: Response) => {
    res.json({ status: 'OK' });
});

app.use('/api', userRouter);

app.listen(SERVER_CONFIG.port, () => {
    console.log(`Server is running on http://localhost:${SERVER_CONFIG.port}`);
});