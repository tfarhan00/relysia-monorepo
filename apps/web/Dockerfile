# ---- Base ----
FROM oven/bun:1 as base
WORKDIR /app

# ---- Dependencies ----
FROM base as deps
COPY package.json bun.lockb ./
COPY apps/web/package.json ./apps/web/
COPY packages/api-client/package.json ./packages/api-client/
RUN bun install --frozen-lockfile

# ---- Build ----
FROM base as build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

# ---- Release ----
FROM nginx:alpine as release
COPY --from=build /app/dist /usr/share/nginx/html
COPY apps/web/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
