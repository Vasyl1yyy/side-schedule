import "dotenv/config";
import knex from "knex";

const db = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

async function connectionTest() {
  try {
    await db.raw("SELECT 1");
    console.log("Database connection established");
  } catch (error) {
    console.error("Database connection failed");
  }
}

connectionTest();
