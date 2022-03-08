import logo from './logo.svg';
import './App.css';
import Card from './Card/Card';
import NewExpense from './NewExpense/NewExpense';
import Expenses from './Expenses/Expenses';
import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter/ExpenseFilter';

const DUMMY_ITEMS = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: '5845.65',
    date: new Date('2022-01-01'),
  },
  {
    id: 'e2',
    title: 'Health Insurance',
    amount: '875845.65',
    date: new Date('2020-01-01'),
  },
  {
    id: 'e3',
    title: 'Life Insurance',
    amount: '3104475.65',
    date: new Date('2019-01-01'),
  },
  {
    id: 'e4',
    title: 'Bike Insurance',
    amount: '994845.65',
    date: new Date('2021-01-01'),
  },
  {
    id: 'e5',
    title: 'House Insurance',
    amount: '74845.65',
    date: new Date('2019-01-05'),
  },
];

function App() {
  const [items, setItemsArr] = useState(DUMMY_ITEMS);
  const [selectedYear, setSelectedYear] = useState('2020');
  const[isFormVisible, setFormVisibility] = useState(false);

  const addExpenseItemHandler = (newExpenseItem) => {
    console.log(newExpenseItem);
    setItemsArr((prevItems) => [newExpenseItem, ...prevItems]);
    setFormVisibility((previousState) => !previousState);
  };

  // if(items.length === 5 && +selectedYear === 2020) {
  //   setItemsArr(DUMMY_ITEMS.filter(el => el.date.getFullYear() === 2020))
  // }

  const filterSelectionHandler = (yearSelected) => {
    setSelectedYear(yearSelected);
    setItemsArr(
      DUMMY_ITEMS.filter((el) => el.date.getFullYear() === +yearSelected)
    );
  };

  

  const showAndHideFormHandler = ev => {
    setFormVisibility((previousState) => !previousState);
  }

  const cancelButtonClickHandler = ev => {
    setFormVisibility((previousState) => !previousState);
  }

  return (
    <Card className="App">
      {isFormVisible || <button onClick={showAndHideFormHandler} >Add Expense</button>}
      {isFormVisible && <NewExpense onCancelClicked={cancelButtonClickHandler} onAddExpense={addExpenseItemHandler} />}
      <ExpenseFilter
        onFilterApply={filterSelectionHandler}
        selectedYear={selectedYear}
      />
      <Expenses items={items} />
    </Card>
  );
}

export default App;
