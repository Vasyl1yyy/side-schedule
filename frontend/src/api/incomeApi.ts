import { api } from "./api";

export const incomeApi = async () => {
  const { data } = await api.get("/incomes");
  return data;
};

export const addIncomeApi = async (newIncome: {
  value: string;
  summa: number;
  description: string;
}) => {
  const response = await api.post("/addIncomes", newIncome);
  return response.data;
};
