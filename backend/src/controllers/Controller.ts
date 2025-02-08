import { Request, Response } from "express";
import { model } from "../models/Model";

export const getIncomes = async (req: Request, res: Response) => {
  try {
    const incomes = await model.getIncome();
    res.json(incomes);
  } catch (error) {
    res.status(500).json({ error: "Не вдалося отримати даних" });
  }
};

export const addIncome = async (req: Request, res: Response) => {
  try {
    const { value, summa, description } = req.body;
    const incomes = await model.create(value, summa, description);
    res.json(incomes);
  } catch (error) {
    res.status(500).json({ error: "Не вдалося додати дані" });
  }
};
