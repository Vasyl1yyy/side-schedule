import knex from "knex";

export const db = knex({
  client: "mysql2",
});
