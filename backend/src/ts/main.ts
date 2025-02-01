import { db } from "./knex";

export async function addIncome(
  value: string,
  summa: number,
  description: string
) {
  const date = new Date();

  await db("income").insert({ value, summa, description, date });
}

interface Income {
  id: number;
  value: string;
  summa: number;
  description: string;
  date: Date;
}

export async function getIncome(): Promise<Income[]> {
  return await db("income").select("*");
}

export async function addSchedule(num: number, cash: number, tips: number) {
  const date = new Date();

  await db("schedule").insert({ num, cash, tips, date });
}

interface Schedule {
  id: number;
  date: Date;
  num: number;
  cash: number;
  tips: number;
}

export async function getSchedule(): Promise<Schedule[]> {
  return await db("schedule").select("*");
}
