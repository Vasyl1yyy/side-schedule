import { Request, Response } from "express";
import { model } from "../models/Model";

export const getIncomes = async (req: Request, res: Response) => {
  try {
    const tasks = await model.getIncome();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Не вдалося отримати даних" });
  }
};
