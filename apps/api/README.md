# API with Better Auth

This API uses Better Auth for authentication and authorization with standardized database schema.

## Setup

1. Install dependencies:
```bash
bun install
```

2. Set up environment variables:
```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/rutsu_ai"

# Better Auth Configuration
AUTH_SECRET="your-super-secret-key-here-make-it-long-and-random"
AUTH_BASE_URL="http://localhost:3000"

# OAuth Providers (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# Frontend URL for CORS
FRONTEND_URL="http://localhost:5173"
```

3. Generate a secure secret key:
```bash
bun run db:secret
```

4. Generate the database schema:
```bash
bun run db:generate
```

5. Run database migrations:
```bash
bun run db:migrate
```

6. Start the development server:
```bash
bun run dev
```

## Database Management

Better Auth uses its own CLI for database operations:

### Generate Schema
Regenerates the database schema based on your Better Auth configuration:
```bash
bun run db:generate
```

### Run Migrations
Applies the Better Auth schema to your database:
```bash
bun run db:migrate
```

### Generate Secret
Creates a secure random secret key for AUTH_SECRET:
```bash
bun run db:secret
```

## Database Schema

Better Auth automatically generates the following tables:

- **users** - User accounts with email, name, and verification status
- **sessions** - User sessions with tokens and expiration
- **accounts** - OAuth provider accounts and credentials
- **verifications** - Email verification tokens

The schema is standardized and follows Better Auth's conventions for maximum compatibility.

## API Endpoints

### Authentication Endpoints
Better Auth provides these endpoints at `/auth/api/*`:
- `POST /auth/api/sign-up` - Register a new user
- `POST /auth/api/sign-in` - Sign in with email/password
- `POST /auth/api/sign-out` - Sign out
- `GET /auth/api/session` - Get current session
- `POST /auth/api/oauth/google` - Google OAuth
- `POST /auth/api/oauth/github` - GitHub OAuth

### Application Endpoints
- `GET /health` - Health check
- `GET /api/user` - Get current user info (public)
- `GET /api/protected` - Protected route example
- `GET /api/profile` - User profile (protected)

## Features

- ✅ Email and password authentication
- ✅ OAuth providers (Google, GitHub)
- ✅ Session management
- ✅ CSRF protection
- ✅ CORS configuration
- ✅ Database integration with Drizzle ORM
- ✅ TypeScript support
- ✅ Standardized database schema
- ✅ CLI-based database management

## Security Best Practices

1. **Always use HTTPS in production**
2. **Set a strong AUTH_SECRET** (use `bun run db:secret` to generate)
3. **Enable email verification** in production by setting `requireEmailVerification: true`
4. **Configure proper CORS origins** for your frontend
5. **Use environment variables** for all sensitive configuration
6. **Run migrations** using the Better Auth CLI

## Integration with Frontend

The API is configured to work with the frontend at `http://localhost:5173`. Make sure your frontend:

1. Sends credentials with requests (`credentials: 'include'`)
2. Handles authentication redirects properly
3. Stores session cookies securely

## Better Auth Documentation

For more information about Better Auth features and configuration, visit:
- [Better Auth Documentation](https://www.better-auth.com/docs)
- [Elysia Integration Guide](https://www.better-auth.com/docs/integrations/elysia)
- [Database Management](https://www.better-auth.com/docs/concepts/database)
- [CLI Commands](https://www.better-auth.com/docs/concepts/cli) 