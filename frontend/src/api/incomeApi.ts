import { api } from "./api";

export const incomeApi = async () => {
  const { data } = await api.get("/incomes");
  return data;
};
