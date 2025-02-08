"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./env");
const knex_1 = __importDefault(require("knex"));
const db = (0, knex_1.default)({
    client: "pg",
    connection: env_1.ENV.DATABASE_URL,
    migrations: {
        directory: "./migrations",
    },
});
exports.default = db;
