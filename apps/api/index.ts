import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { auth } from "./lib/auth";
import "dotenv/config";

const api = new Elysia({ prefix: "/api" })
  .get("/user", async ({ request }) => {
    try {
      const session = await auth.api.getSession({
        headers: request.headers,
      });

      return {
        user: session?.user || null,
        authenticated: !!session?.user,
      };
    } catch (error) {
      return {
        user: null,
        authenticated: false,
      };
    }
  })
  .get("/protected", async ({ request }) => {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user) {
      throw new Error("Unauthorized");
    }

    return {
      message: `Hello ${session.user.name || session.user.email}! This is a protected route.`,
      user: {
        id: session.user.id,
        email: session.user.email,
        name: session.user.name,
      },
    };
  })
  .get("/profile", async ({ request }) => {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user) {
      throw new Error("Unauthorized");
    }

    return {
      user: {
        id: session.user.id,
        email: session.user.email,
        name: session.user.name,
        createdAt: session.user.createdAt,
      },
    };
  });

// Initialize the Elysia app with CORS and Better Auth
const app = new Elysia()
  .use(
    cors({
      origin: process.env.FRONTEND_URL || "http://localhost:5173",
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  )
  // Mount Better Auth handler
  .mount("/auth", auth.handler)

  // Health check endpoint
  .get("/health", () => ({
    status: "ok",
    timestamp: new Date().toISOString(),
  }))
  .use(api);

// Start the server
app.listen(3000);
console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;
export { app };
