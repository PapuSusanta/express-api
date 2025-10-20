import { NextFunction, Request, Response } from "express";
import { randomUUID } from "crypto";

import { User } from "@/models/user";
import { BadRequestError } from "@/errors/apiError";

export function CreateUser(request: Request<{}, {}, User>, response: Response) {
    const user = request.body;
    user.id = randomUUID();

    response.status(201).json({ user: user });
}

export function GetUsers(request: Request, response: Response) {
    const Id = randomUUID();
    const user: User = {
        id: Id,
        name: "John Doe",
        age: 30
    };
    response.status(200).json({ user: user });
}

export function GetUser(request: Request, response: Response, next: NextFunction) {
    const userId = request.params.id;
    if (!userId) {
        next(new BadRequestError("User ID is required"));
    }
    const user: User = {
        id: userId,
        name: "Jane Doe",
        age: 25
    };
    response.status(200).json({ user: user });
}