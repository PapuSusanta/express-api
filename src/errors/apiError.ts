import CustomError from "@/errors/customError";

export class BadRequestError extends CustomError {
    StatusCode: number = 400;
    constructor(message: string) {
        super(message || "Bad Request");
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
    serializeErrors(): { message: string; } {
        return { message: this.message };
    }
}

export class NotFoundError extends CustomError {
    StatusCode: number = 404;
    constructor(message: string) {
        super(message || "Not Found");
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
    serializeErrors(): { message: string; } {
        return { message: this.message };
    }
}

export class InternalServerError extends CustomError {
    StatusCode: number = 500;
    constructor(message: string) {
        super(message || "Internal Server Error");
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
    serializeErrors(): { message: string; } {
        return { message: this.message };
    }
}

export class UnauthorizedError extends CustomError {
    StatusCode: number = 401;
    constructor(message: string) {
        super(message || "Unauthorized");
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
    serializeErrors(): { message: string; } {
        return { message: this.message };
    }
}

export class ForbiddenError extends CustomError {
    StatusCode: number = 403;
    constructor(message: string) {
        super(message || "Forbidden");
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
    serializeErrors(): { message: string; } {
        return { message: this.message };
    }
}

export class ConflictError extends CustomError {
    StatusCode: number = 409;
    constructor(message: string) {
        super(message || "Conflict");
        Object.setPrototypeOf(this, ConflictError.prototype);
    }
    serializeErrors(): { message: string; } {
        return { message: this.message };
    }
}

export class UnprocessableEntityError extends CustomError {
    StatusCode: number = 422;
    constructor(message: string) {
        super(message || "Unprocessable Entity");
        Object.setPrototypeOf(this, UnprocessableEntityError.prototype);
    }
    serializeErrors(): { message: string; } {
        return { message: this.message };
    }
}

export class TooManyRequestsError extends CustomError {
    StatusCode: number = 429;
    constructor(message: string) {
        super(message || "Too Many Requests");
        Object.setPrototypeOf(this, TooManyRequestsError.prototype);
    }
    serializeErrors(): { message: string; } {
        return { message: this.message };
    }
}

export class ServiceUnavailableError extends CustomError {
    StatusCode: number = 503;
    constructor(message: string) {
        super(message || "Service Unavailable");
        Object.setPrototypeOf(this, ServiceUnavailableError.prototype);
    }
    serializeErrors(): { message: string; } {
        return { message: this.message };
    }
}

export class GatewayTimeoutError extends CustomError {
    StatusCode: number = 504;
    constructor(message: string) {
        super(message || "Gateway Timeout");
        Object.setPrototypeOf(this, GatewayTimeoutError.prototype);
    }
    serializeErrors(): { message: string; } {
        return { message: this.message };
    }
}

export class ValidationError extends CustomError {
    StatusCode: number = 400;
    constructor(message: string) {
        super(message || "Validation Error");
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
    serializeErrors(): { message: string; } {
        return { message: this.message };
    }
}

export class CustomAPError extends CustomError {
    StatusCode: number = 418;
    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, CustomAPError.prototype);
    }
    serializeErrors(): { message: string; } {
        return { message: this.message };
    }
}
