
abstract class CustomError extends Error {
    abstract StatusCode: number;

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype);
    }

    abstract serializeErrors(): { message: string };
}

export default CustomError;