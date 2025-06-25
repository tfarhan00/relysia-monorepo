# ---- Base ----
FROM oven/bun:1 as base
WORKDIR /app

# ---- Dependencies ----
FROM base as deps
COPY package.json bun.lockb ./
COPY apps/api/package.json ./apps/api/
COPY packages/db/package.json ./packages/db/
RUN bun install --frozen-lockfile

# ---- Build ----
FROM base as build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

# ---- Release ----
FROM oven/bun:1-slim as release
WORKDIR /app
ENV NODE_ENV=production

COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY apps/api/package.json ./package.json

CMD ["bun", "run", "start"]
