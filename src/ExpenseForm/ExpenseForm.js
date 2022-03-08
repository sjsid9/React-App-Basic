import { useState } from 'react';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   });

  const onSubmitHandler = (ev) => {
    ev.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    props.onSave(expenseData);
  };

  const titleChangHandler = (ev) => {
    // console.log(ev.target.value);
    setEnteredTitle(ev.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: ev.target.value };
    // });
  };

  const amountChangeHandler = (ev) => {
    // console.log(ev.target.value);
    setEnteredAmount(ev.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: ev.target.value };
    // });
  };

  const dateChangeHandler = (ev) => {
    // console.log(ev.target.value);
    setEnteredDate(ev.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: ev.target.value };
    // });
  };

  const onCancelClickHandler = ev => {
      props.onCancelClicked();
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label>Title</label> &nbsp;
        <input
          type="text"
          value={enteredTitle}
          onChange={titleChangHandler}
        ></input>
      </div>
      <div>
        <label>Amount</label> &nbsp;
        <input
          type="number"
          value={enteredAmount}
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
          value={enteredDate}
          onChange={dateChangeHandler}
          min="2019-01-01"
          max="2022-12-31"
        ></input>
      </div>
      <button type="submit">Add Expense</button>
      <button type="button" onClick={onCancelClickHandler} >Cancel</button>
    </form>
  );
};

export default ExpenseForm;
