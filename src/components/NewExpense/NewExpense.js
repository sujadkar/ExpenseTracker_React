import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import  "./NewExpense.css";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    
    const saveExpenseDataHandler  = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString(),
        };
        //console.log(expenseData);
        setIsEditing(!isEditing);
        props.onAddExpense(expenseData);
    }
    const startEditingHandler = (event) => {
        setIsEditing(!isEditing);
    }

    const stopEditingHandler = (event) => {
        setIsEditing(!isEditing);
    }
     return (
    <div className="new-expense">
             {isEditing === true ? 
             <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/> : 
             <button onClick={startEditingHandler}>Add New Expenses</button>}

    </div>
    );
};

export default NewExpense;