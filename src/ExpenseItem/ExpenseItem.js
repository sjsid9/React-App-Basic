import { useState } from 'react';
import './Expenses.css';

const ExpenseItem = (props) => {
  //   let title = props.items.title;
  let amount = props.items.amount;
  let date = props.items.date;

  const [title, setTitle] = useState(props.items.title);
  const [count, setCount] = useState(1);
  //   let count = 1;
  console.log('React rendered');

  const onClickHandler = (ev) => {
    // console.log(ev);
    // title = 'Hello';
    setCount((prevCount) => {
      console.log(prevCount);
      return prevCount + 1 ;
    });
    // console.log(count);
    setTitle((prevState) => {
        console.log('hello')
      return 'Updated' + count;
    });
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
