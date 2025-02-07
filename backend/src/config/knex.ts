import { ENV } from "./env";
import knex from "knex";

const db = knex({
  client: "mysql2",
  connection: {
    host: ENV.DB_HOST,
    user: ENV.DB_USER,
    password: ENV.DB_PASSWORD,
    database: ENV.DB_NAME,
  },
});

export default db;
