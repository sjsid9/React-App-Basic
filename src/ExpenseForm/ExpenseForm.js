import { useState } from 'react';

const ExpenseForm = (props) => {
  //   const [enteredTitle, setEnteredTitle] = useState('');
  //   const [enteredAmount, setEnteredAmount] = useState('');
  //   const [enteredDate, setEnteredDate] = useState('');

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const onSubmitHandler = (ev) => {
    ev.preventDefault();
    console.log(ev);
  };

  const titleChangHandler = (ev) => {
    // console.log(ev.target.value);
    // setEnteredTitle(ev.target.value);
    setUserInput({
      ...userInput,
      enteredTitle: ev.target.value,
    });
  };

  const amountChangeHandler = (ev) => {
    // console.log(ev.target.value);
    // setEnteredAmount(ev.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: ev.target.value,
    });
  };

  const dateChangeHandler = (ev) => {
    // console.log(ev.target.value);
    // setEnteredDate(ev.target.value);
    setUserInput({
      ...userInput,
      enteredDate: ev.target.value,
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label>Title</label> &nbsp;
        <input type="text" onChange={titleChangHandler}></input>
      </div>
      <div>
        <label>Amount</label> &nbsp;
        <input
          type="number"
          onChange={amountChangeHandler}
          min="0"
          step="0.01"
          max="10000"
        ></input>
      </div>
      <div>
        <label>Date</label> &nbsp;
        <input
          type="date"
          onChange={dateChangeHandler}
          min="2019-01-01"
          max="2022-12-31"
        ></input>
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
