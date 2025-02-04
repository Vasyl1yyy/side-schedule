import db from "../config/knex";
import { Income } from "../types/MoneyTypes";

export class model {
  static async getIncome(): Promise<Income[]> {
    return db("income").select("*");
  }
  static async create(Income: Income): Promise<number[]> {
    return db("income").insert(Income);
  }
}
