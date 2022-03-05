import logo from './logo.svg';
import './App.css';
import Card from './Card/Card';
import NewExpense from './NewExpense/NewExpense';
import Expenses from './Expenses/Expenses';
import { useState } from 'react';

const DUMMY_ITEMS = [
  { id: 'e1', title: 'Car Insurance', amount: '5845.65', date: new Date() },
  {
    id: 'e2',
    title: 'Health Insurance',
    amount: '875845.65',
    date: new Date(),
  },
  { id: 'e3', title: 'Life Insurance', amount: '3104475.65', date: new Date() },
  { id: 'e4', title: 'Bike Insurance', amount: '994845.65', date: new Date() },
  { id: 'e5', title: 'House Insurance', amount: '74845.65', date: new Date() },
];

function App() {
  const [items, setItemsArr] = useState(DUMMY_ITEMS);

  const addExpenseItemHandler = (newExpenseItem) => {
    console.log(newExpenseItem);
    setItemsArr((prevItems) => [newExpenseItem, ...prevItems]);
  };

  return (
    <Card className="App">
      <NewExpense onAddExpense={addExpenseItemHandler} />
      <Expenses items={items} />
    </Card>
  );
}

export default App;
