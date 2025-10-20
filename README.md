# Express API

A TypeScript-based Express.js API with PostgreSQL integration and error handling.

## Features

- Built with Express.js and TypeScript
- PostgreSQL database integration
- Custom error handling middleware
- API versioning (v1, v2)
- Environment configuration
- CORS support
- Request logging with Morgan
- User management endpoints
- TypeScript path aliases
- Hot reloading for development

## Prerequisites

- Node.js (>= 18)
- PostgreSQL
- pnpm (recommended) or npm

## Quick Start

1. Clone the repository

2. Install dependencies:
```bash
pnpm install
```

3. Configure environment:
```bash
cp .env.example .env
```

4. Add your environment variables in `.env`:
```
PORT=3000
DB_HOST=localhost
DB_USER=myuser
DB_PASSWORD=mypassword
DB_NAME=mydatabase
DB_PORT=5432
```

5. Start development server:
```bash
pnpm dev
```

## Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm start` - Start production server

## API Routes

### User Endpoints (v1)

- `GET /v1/api/users` - Get all users
- `POST /v1/api/users` - Create a new user
- `GET /v1/api/users/:id` - Get user by ID

### Health Check

- `GET /health` - Check API health status

## Project Structure

```
├── src/
│   ├── config/           # Configuration files
│   │   ├── index.ts     # Environment config
│   │   └── pgConfig.ts  # PostgreSQL config
│   ├── endpoints/        # Route handlers
│   │   └── users.ts     # User routes
│   ├── errors/          # Custom error handling
│   │   ├── apiError.ts  # API error classes
│   │   └── customError.ts # Base error class
│   ├── handlers/        # Request handlers
│   │   └── users.ts     # User handlers
│   ├── middlewares/     # Express middlewares
│   │   └── errorHandler.ts # Error handling middleware
│   ├── models/          # Data models
│   │   └── user.ts      # User model interface
│   ├── routers/         # Route definitions
│   │   ├── v1/         # Version 1 routes
│   │   └── v2/         # Version 2 routes
│   └── index.ts         # Application entry point
├── requests/            # HTTP request examples
├── nodemon.json         # Nodemon configuration
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
└── .env.example         # Environment variables template
```

## Error Handling

The API includes custom error handling with the following error types:

- `BadRequestError` (400)
- `UnauthorizedError` (401)
- `ForbiddenError` (403)
- `NotFoundError` (404)
- `ConflictError` (409)
- `UnprocessableEntityError` (422)
- `TooManyRequestsError` (429)
- `InternalServerError` (500)
- `ServiceUnavailableError` (503)
- `GatewayTimeoutError` (504)
- `ValidationError` (400)

## Database

The project uses PostgreSQL with the `pg` package. Database configuration is handled in `src/config/pgConfig.ts`.

## Development

### Hot Reloading

Development server uses `nodemon` configured in `nodemon.json` for automatic reloading when files change.

### TypeScript Path Aliases

The project uses TypeScript path aliases for cleaner imports. The base alias is:
```json
{
  "@/*": ["src/*"]
}
```

### HTTP Requests

Sample HTTP requests are available in `requests/user.http` for testing endpoints.

## Testing 

Run the health check endpoint to test error handling:
```http
GET http://localhost:3000/health
```

Test user endpoints:
```http
GET http://localhost:3000/v1/api/users
POST http://localhost:3000/v1/api/users
GET http://localhost:3000/v1/api/users/:id
```

## Security

- CORS is enabled and configurable
- Request logging with Morgan
- Environment variables for sensitive data
- Error messages don't expose internals

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.