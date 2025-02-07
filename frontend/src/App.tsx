import { useQuery } from "react-query";
import { incomeApi } from "./api/incomeApi";

const useIncome = () => {
  return useQuery({ queryKey: ["tasks"], queryFn: incomeApi });
};

function App() {
  const { data: income, isLoading, error } = useIncome();

  if (isLoading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка завантаження</p>;
  if (!income || !Array.isArray(income)) return <p>Дані відсутні</p>;

  return (
    <ul>
      {income.map((incomes) => (
        <li key={incomes.id}>
          {incomes.value}
          {incomes.summa}
          {incomes.description}
          {incomes.date}
        </li>
      ))}
    </ul>
  );
}

export default App;
