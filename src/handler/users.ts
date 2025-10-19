import { Request, Response } from "express";
import { User } from "../model/user.js";
import { randomUUID } from "crypto";


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

export function GetUser(request: Request, response: Response) {
    const userId = request.params.id;
    const user: User = {
        id: userId,
        name: "Jane Doe",
        age: 25
    };
    response.status(200).json({ user: user });
}