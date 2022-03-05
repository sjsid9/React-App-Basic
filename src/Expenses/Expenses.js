import ExpenseItem from '../ExpenseItem/ExpenseItem';
const Expenses = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Expenses;
