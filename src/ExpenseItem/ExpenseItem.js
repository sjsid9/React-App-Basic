import { useState } from 'react';
import './Expenses.css';

const ExpenseItem = (props) => {
  // let title = props.item.title;
  let amount = props.item.amount;
  let date = props.item.date;

  const [title, setTitle] = useState(props.item.title);
  // const [count, setCount] = useState(1);
  //   let count = 1;
  // console.log('React rendered');

  const onClickHandler = (ev) => {
    // console.log(ev);
    // title = 'Hello';
    // setCount((prevCount) => {
    //   console.log(prevCount);
    //   return prevCount + 1 ;
    // });
    // console.log(count);
    // setTitle((prevState) => {
    // console.log('hello')
    // return prevState;
    // });
    // console.log(title);
  };

  return (
    <div className="expense-container">
      <div className="expense-item">{title}</div>
      <div className="expense-item">{amount}</div>
      <div className="expense-item">{date.toISOString()}</div>
      <button onClick={onClickHandler}>Change Title</button>
    </div>
  );
};

export default ExpenseItem;
