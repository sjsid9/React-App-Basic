import ExpenseForm from '../ExpenseForm/ExpenseForm';

const NewExpense = (props) => {
  const saveHandler = (saveEvent) => {
    const expenseData = {
      ...saveEvent,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div>
      <ExpenseForm onCancelClicked={props.onCancelClicked} onSave={saveHandler} />
    </div>
  );
};

export default NewExpense;
