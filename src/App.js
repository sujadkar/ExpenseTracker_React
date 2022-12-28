import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES= [
  {title: "Car Insurance",amount:294.95,date : new Date(2020,4,28)},
  {title: "Car Insurance1",amount:294.95,date : new Date(2020,6,28)},
  {title: "Car Insurance2",amount:294.95,date : new Date(2021,1,28)},
  {title: "Car Insurance3",amount:294.95,date : new Date(2022,9,28)}
];


const App = () => {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense,...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
