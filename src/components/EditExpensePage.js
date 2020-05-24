import React from 'react';
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {editExpense, removeExpense,startRemoveExpense,startEditExpense} from "../actions/expenses";

const EditExpensePage = (props)=>{


    return (
        <div>
            <ExpenseForm
                onSubmit={(expense)=>{
                    console.log(expense)
                    props.dispatch(startEditExpense(props.match.params.id,expense));
                    props.history.push('/dashboard')
                }}
                expense={props.expense}
            />
            <button
                onClick={(e)=>{
                    //props.dispatch(removeExpense({id:props.match.params.id}));
                    console.log(props.match.params.id)
                    props.dispatch(startRemoveExpense(props.match.params.id))
                    props.history.push('/dashboard')
                }}
            >Remove</button>

        </div>
    )
}

const mapStateToProps = (state,props)=>{
    return {
        expense: state.expenses.find((expense)=>{
            return expense.id === props.match.params.id
        })
    }

}

export default connect(mapStateToProps)(EditExpensePage);