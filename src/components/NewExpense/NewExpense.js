import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData); //this expenseData will go to addExpenseHandler in App.js as expense
    setIsEditing(false); //close form once submitted
  };

  const startEditingHandler = () => {
    setIsEditing(true); //startEditingHandler will be triggered when add new expense button is clicked
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button> //isEditing is false: show button when not editing
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler} //stopEditingHandler is passed as value to onCancel prop in the ExpenseForm component
        />
      )}
    </div> //ExpenseForm will be rendered by the NewExpense
  );
};

export default NewExpense;
