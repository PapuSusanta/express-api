import { Router } from "express";

import { CreateUser, GetUser, GetUsers } from "@/handlers/users";

const router = Router();

router.get('/users', GetUsers);

router.post('/users', CreateUser);

router.get('/users/:id', GetUser);

export default router;