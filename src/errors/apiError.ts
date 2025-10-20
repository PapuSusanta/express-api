import CustomError from "@/errors/customError";

export class BadRequestError extends CustomError {
    StatusCode: number = 400;
    constructor(message: string) {
        super(message || "Bad Request");
    }
    serializeErrors(): { message: string; } {
        return { message: this.message };
    }
}

export class NotFoundError extends CustomError {
    StatusCode: number = 404;
    serializeErrors(): { message: string; } {
        return { message: this.message };
    }
}

export class InternalServerError extends CustomError {
    StatusCode: number = 500;
    serializeErrors(): { message: string; } {
        return { message: this.message };
    }
}

export class UnauthorizedError extends CustomError {
    StatusCode: number = 401;
    serializeErrors(): { message: string; } {
        return { message: this.message };
    }
}

export class ForbiddenError extends CustomError {
    StatusCode: number = 403;
    serializeErrors(): { message: string; } {
        return { message: this.message };
    }
}

export class ConflictError extends CustomError {
    StatusCode: number = 409;
    serializeErrors(): { message: string; } {
        return { message: this.message };
    }
}

export class UnprocessableEntityError extends CustomError {
    StatusCode: number = 422;
    serializeErrors(): { message: string; } {
        return { message: this.message };
    }
}

export class TooManyRequestsError extends CustomError {
    StatusCode: number = 429;
    serializeErrors(): { message: string; } {
        return { message: this.message };
    }
}

export class ServiceUnavailableError extends CustomError {
    StatusCode: number = 503;
    serializeErrors(): { message: string; } {
        return { message: this.message };
    }
}

export class GatewayTimeoutError extends CustomError {
    StatusCode: number = 504;
    serializeErrors(): { message: string; } {
        return { message: this.message };
    }
}

export class ValidationError extends CustomError {
    StatusCode: number = 400;
    serializeErrors(): { message: string; } {
        return { message: this.message };
    }
}

export class CustomAPError extends CustomError {
    StatusCode: number;
    constructor(message: string, statusCode: number) {
        super(message);
        this.StatusCode = statusCode;
    }
    serializeErrors(): { message: string; } {
        return { message: this.message };
    }
}
