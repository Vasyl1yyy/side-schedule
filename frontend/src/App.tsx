import { useQuery, useMutation, useQueryClient } from "react-query";
import { incomeApi, addIncomeApi } from "./api/incomeApi";
import { useState } from "react";

const useIncome = () => {
  return useQuery({ queryKey: ["tasks"], queryFn: incomeApi });
};

function App() {
  const queryClient = useQueryClient();
  const { data: income, isLoading, error } = useIncome();
  const [value, setValue] = useState("");
  const [summa, setSumma] = useState(0);
  const [description, setDescription] = useState("");

  const mutation = useMutation(addIncomeApi, {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });

  const handleAddIncome = () => {
    mutation.mutate({ value, summa, description });
    setValue("");
    setSumma(0);
    setDescription("");
  };

  if (isLoading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка завантаження</p>;
  if (!income || !Array.isArray(income)) return <p>Дані відсутні</p>;

  const bank = income
    .map((incomes) =>
      incomes.value ? Number(incomes.summa) : Number(-incomes.summa)
    )
    .reduce((a, b) => a + b, 0);
  return (
    <div>
      <ul>
        {income.map((incomes) => (
          <li key={incomes.id} id={incomes.id}>
            {incomes.value + ""} | {incomes.summa} | {incomes.description} |{" "}
            {incomes.created_at}
          </li>
        ))}
        <li>
          <h1>bank: {bank}</h1>
        </li>
      </ul>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Value"
      />
      <input
        type="number"
        value={summa}
        onChange={(e) => setSumma(Number(e.target.value))}
        placeholder="Summa"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button onClick={handleAddIncome}>Додати</button>
    </div>
  );
}

export default App;
