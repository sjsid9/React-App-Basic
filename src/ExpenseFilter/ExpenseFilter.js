import './ExpenseFilter.css';
const ExpenseFilter = (props) => {
  const onFilterValueSelectionHandler = (ev) => {
    props.onFilterApply(ev.target.value);
  };

  return (
    <div className="expense-filter">
      <label>Filter By Year</label>
      <select
        name="Years"
        onChange={onFilterValueSelectionHandler}
        value={props.selectedYear}
      >
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
