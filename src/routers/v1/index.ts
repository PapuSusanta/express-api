import { Router } from "express";

import userRouter from "@/endpoints/users";

const v1 = Router();

v1.use("/v1/api", userRouter);

export default v1;
