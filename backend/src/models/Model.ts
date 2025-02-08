import db from "../config/knex";
import { Income } from "../types/MoneyTypes";

export class model {
  static async getIncome(): Promise<Income[]> {
    return db("income").select("*");
  }
  static async create(
    value: string,
    summa: number,
    description: string
  ): Promise<Income[]> {
    return db("income").insert({ value, summa, description });
  }
}
