import logo from './logo.svg';
import './App.css';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import Card from './Card/Card';

function App() {
  const items = [
    { title: 'Car Insurance', amount: '5845.65', date: new Date() },
    { title: 'Health Insurance', amount: '875845.65', date: new Date() },
    { title: 'Life Insurance', amount: '3104475.65', date: new Date() },
    { title: 'Bike Insurance', amount: '994845.65', date: new Date() },
    { title: 'House Insurance', amount: '74845.65', date: new Date() },
  ];

  return (
    <Card className="App">
      <ExpenseItem items={items[0]}/>
      <ExpenseItem items={items[1]}/>
      <ExpenseItem items={items[2]}/>
      <ExpenseItem items={items[3]}/>
      <ExpenseItem items={items[4]}/>
    </Card>
  );
}

export default App;
