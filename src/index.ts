import express, { type NextFunction, type Request, type Response } from "express";
import userRouter from "./endpoint/users.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello, World!');
});

app.get('/health', (req: Request, res: Response) => {
    res.json({ status: 'OK' });
});

app.use('/api', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});