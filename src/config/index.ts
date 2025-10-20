/*
* NODE MODULES
*/
import dotenv from 'dotenv';


dotenv.config();

export const DB_CONFIG = {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME || 'mydatabase',
    user: process.env.DB_USER || 'myuser',
    password: process.env.DB_PASSWORD || 'mypassword',
};

export const SERVER_CONFIG = {
    port: Number(process.env.PORT) || 3000,
};