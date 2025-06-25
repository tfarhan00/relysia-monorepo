import { edenTreaty } from "@elysiajs/eden";
import type { App } from "@relysia/api";

export const client = edenTreaty<App>("/api");
