import React, { useState } from "react"; //useState confugures values as state where changes to these values would be reflected in the component function when re-called

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate.js";

const ExpenseItem = (props) => {
  {
    /*const [title, setTitle] = useState(props.title); // props.title here is the special variable, setTitle is the function which we'll call later to change the value
  const clickHandler = () => {
    setTitle('updated val'); //on clicked, title would be updated with value passed in the setTitle()
    console.log(title);
  };*/
  }
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div class="expense-item__price">Rs {props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
