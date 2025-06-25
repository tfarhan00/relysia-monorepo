import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const client = postgres(process.env.DATABASE_URL!, { prepare: false });

type DatabaseSchema = typeof schema;
export const db = drizzle<DatabaseSchema>(client, { schema });
