import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2019, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450.55,
    date: new Date(2021, 5, 12),
  },
];
//dummy_expense is some intial value to be displayed
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]; //here setExpenses is taking the expense(the argument) and then filling out the rest from prev expense which is dummy only
    });
  }; //addExpenseHandler is triggerred whenever a new expense is added

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />{" "}
      {/* NewExpense will be rendered to the HTML page */}
      <Expenses items={expenses} />
      {/* expenses props is renamed as items to avoid confusion of names */}
    </div>
  );
};

export default App;
