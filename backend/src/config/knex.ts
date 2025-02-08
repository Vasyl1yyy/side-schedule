import { ENV } from "./env";
import knex from "knex";

const db = knex({
  client: "pg",
  connection: ENV.DATABASE_URL,
  migrations: {
    directory: "./migrations",
  },
});

export default db;
