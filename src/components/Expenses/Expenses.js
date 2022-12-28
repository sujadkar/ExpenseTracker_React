import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import React,{useState} from 'react';
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear,setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear =>{
      console.log(selectedYear);
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });  

    
    return (
      <div>
           
          <Card className="expenses">
          <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
          
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>

          <ExpensesList  items={filteredExpenses}>  </ExpensesList>
          
          </Card>
      </div>
     
    );
}

export default Expenses;