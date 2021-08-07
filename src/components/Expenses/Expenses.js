import React, { useState } from "react";

import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card"; //two dots for one step out of the folder Expenses and then to the UI
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear); //set default year on the page
    // console.log(selectedYear); //here we'll get the year from the child Expensefilter, process is called Lifting Up State
  }; // props.items is the array of expenses
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear; //only items with the year mathcing with the filteredYear would by displayed, without affecting the original array of items
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear} //controlled component
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses = {filteredExpenses} />
        <ExpensesList items={filteredExpenses} />

        {/* {filteredExpenses.length === 0 && <p> No Expenses Found </p>} conditional content if 1st part's true then only 2nd part will be executed */}
        {/* {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />))} */}
        {/* mapping every expense for each expense in the array; transforming the expenses array (in the App.js) into the object ExpenseItem */}
      </Card>
    </div>
  );
};

export default Expenses;
