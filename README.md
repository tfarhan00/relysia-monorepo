# Relysia Monorepo Boilerplate 🚀

A fast, modern full-stack monorepo starter to help you build and scale apps quickly. Built with Bun, TurboRepo, Elysia, React, Vite, Drizzle ORM, and TypeScript.

## 🚀 Features

- ⚡️ Superfast stack: Bun for runtime and package management, Elysia for the backend, and Vite + React for the frontend. Enjoy instant dev and build speeds.
- 🦊 Elysia + Bun API: Modern, high-performance backend with Elysia on Bun.
- ⚛️ React + Vite Frontend: Fast, modern SPA using React 19 and Tailwind CSS.
- 🗄️ Type-safe Database: PostgreSQL with Drizzle ORM for reliable, scalable data.
- 🔗 Reusable API Client: Typed SDK for smooth integration between frontend and backend.
- 🏎️ TurboRepo Monorepo: Fast builds and easy workspace management.
- 🛠️ TypeScript, ESLint & Prettier: All the tools you need for clean, maintainable code.
- 🐳 Docker-Ready: Simple local development and deployment with Docker.

## 🗂️ Table of Contents
- [Project Overview](#project-overview)
- [Monorepo Structure](#monorepo-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Development](#development)
- [Environment Variables](#environment-variables)
- [Database](#database)
- [Docker](#docker)
- [Scaling the Application](#scaling-the-application)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview
This boilerplate provides a scalable foundation for full-stack applications. It features:
- **Backend:** Elysia (Bun runtime) API server
- **Frontend:** React (Vite, Tailwind CSS)
- **Database:** PostgreSQL with Drizzle ORM
- **API Client:** TypeScript SDK for frontend/backend communication
- **Monorepo:** Managed with TurboRepo and Bun workspaces

> **Why Relysia?**
> - Instant installs and builds with Bun
> - Modern, type-safe, and batteries-included
> - Built for speed, DX, and scalability

## Monorepo Structure
```
.
├── apps/
│   ├── api/         # Backend API (Elysia + Bun)
│   └── web/         # Frontend (React + Vite)
├── packages/
│   ├── api-client/  # TypeScript API client
│   └── db/          # Drizzle ORM config
├── .env.example     # Root environment variables template
├── docker-compose.yml
├── turbo.json       # TurboRepo config
├── package.json     # Monorepo scripts & workspaces
└── README.md
```

## Tech Stack
- **Bun**: Fast JS/TS runtime & package manager
- **TurboRepo**: Monorepo build system
- **Elysia**: Backend web framework (Bun)
- **React**: Frontend UI library
- **Vite**: Frontend build tool
- **Drizzle ORM**: Type-safe SQL ORM
- **TypeScript**: Static typing
- **ESLint & Prettier**: Linting & formatting
- **Tailwind CSS**: Utility-first CSS

## Getting Started
### Prerequisites
- [Bun](https://bun.sh/) (v1+)
- [Docker](https://www.docker.com/) (optional, for DB)

### Installation
Clone and install dependencies:
```bash
git clone <your-repo-url>
cd relysia
bun install
```

### Environment Variables
Set up environment variables for the entire project:

1. **Root environment** (for Docker Compose and shared config):
```bash
cp .env.example .env
```

2. **API environment** (for the backend):
```bash
cp apps/api/.env.example apps/api/.env
```

3. **Web environment** (for the frontend):
```bash
cp apps/web/.env.example apps/web/.env
```

**Important:** Edit each `.env` file and replace placeholder values with your actual configuration.

## Scripts
Run these from the repo root:
| Script       | Description                      |
|--------------|----------------------------------|
| `bun run dev`| Start all apps in dev mode       |
| `bun run build` | Build all apps/packages      |
| `bun run lint`  | Lint all code                |
| `bun run format`| Format codebase              |

Or use app-specific scripts (see each `package.json`).

## Development
### Backend (API)
```bash
cd apps/api
bun run dev
```
- Runs Elysia server at [http://localhost:3000](http://localhost:3000)
- API route example: `GET /api/message`

### Frontend (Web)
```bash
cd apps/web
bun run dev
```
- Runs Vite dev server at [http://localhost:5173](http://localhost:5173)

### API Client
Reusable TypeScript client for API calls:
```bash
cd packages/api-client
bun run build
```

## Environment Variables
The project uses multiple `.env` files for different purposes:

### Root `.env` (for Docker Compose)
- `DATABASE_URL`: PostgreSQL connection string
- `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB`: Database credentials
- `AUTH_SECRET`: JWT secret key
- `AUTH_BASE_URL`: Authentication base URL
- `FRONTEND_URL`: Frontend URL for CORS

### API `.env` (for backend)
- All authentication and database variables
- OAuth provider credentials (Google, GitHub)
- API configuration

### Web `.env` (for frontend)
- `VITE_API_URL`: Backend API URL
- Development server configuration

**Security Notes:**
- Never commit `.env` files to version control
- Use strong, unique secrets in production
- Generate secure keys: `openssl rand -base64 32`

## Database
- Uses PostgreSQL with Drizzle ORM.
- Configure database in `.env` and `packages/db/drizzle.config.ts`.
- Run migrations using Drizzle CLI:
```bash
bunx drizzle-kit generate:pg
```

## Docker
- Use `docker-compose.yml` to spin up local Postgres and services:
```bash
docker-compose up -d
```

## Scaling the Application 📈

This project is built to grow with you. Here's how you can scale it up for production:

### 1. Scale the API and Frontend 🖥️
- **API (Elysia/Bun):**
  - Run several API server instances behind a load balancer (Nginx, HAProxy, or your cloud provider's load balancer).
  - The API is stateless, so you can add or remove instances as needed. Use Docker Compose for local scaling, or Kubernetes for production.
  - For example, with Docker Compose:
    ```bash
    docker-compose up --scale api=3
    ```
  - In production, use a managed Kubernetes service (like AWS EKS, GCP GKE, or DigitalOcean Kubernetes) to automate scaling and health checks.

- **Frontend (React/Vite):**
  - Build your frontend for production (`bun run build` in `apps/web`).
  - Deploy the static files to a CDN or static hosting (Vercel, Netlify, AWS S3 + CloudFront, or Cloudflare Pages).
  - Use cache headers and invalidation strategies to keep content fresh.

### 2. Database Scaling 🛢️
- **Connection Pooling:**
  - Use PgBouncer or Pgpool-II to manage database connections, especially if you have many API instances.
- **Read Replicas:**
  - For heavy read traffic, set up PostgreSQL read replicas. Route SELECT queries to replicas and writes to the primary.
- **Backups and Monitoring:**
  - Set up automated backups and use monitoring tools (like pgAdmin, Datadog, or cloud-native solutions) to track performance and spot issues early.

### 3. Caching ⚡
- **API Caching:**
  - Use Redis or Memcached to cache frequent queries or session data. This reduces database load and speeds up responses.
- **Frontend Caching:**
  - Leverage browser caching and service workers for static assets and API responses. Configure your CDN for optimal cache control.

### 4. Containers and Orchestration 🐳
- **Docker:**
  - Use the provided Dockerfiles to build production images for both API and frontend.
- **Kubernetes:**
  - For serious scaling, deploy your containers to Kubernetes. Use Horizontal Pod Autoscaling to automatically adjust the number of API pods based on CPU or request load.
  - Set up health checks, rolling updates, and secrets management for a robust deployment.

### 5. Serverless Options ☁️
- **API:**
  - If you want to go serverless, deploy the API to AWS Lambda, Google Cloud Functions, or Vercel Functions. This is great for unpredictable or spiky traffic.
- **Frontend:**
  - Host your static frontend on a serverless platform like Vercel, Netlify, or Cloudflare Pages for instant global delivery.

**💡 Tip:**
- Always monitor your app's performance and error rates. Use tools like Sentry, Datadog, or your cloud provider's monitoring suite.
- Regularly review your scaling setup as your user base grows.

## Contributing 🤝
1. Fork and clone the repo
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make and commit your changes
4. Run lint and tests
5. Push and open a PR

## License 📄
MIT

---

**Happy hacking! 🎉**