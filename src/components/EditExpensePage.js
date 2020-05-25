import React from 'react';
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {editExpense, removeExpense,startRemoveExpense,startEditExpense} from "../actions/expenses";

const EditExpensePage = (props)=>{


    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Expense</h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm
                    onSubmit={(expense)=>{
                        console.log(expense)
                        props.dispatch(startEditExpense(props.match.params.id,expense));
                        props.history.push('/dashboard')
                    }}
                    expense={props.expense}
                />
                <button
                    className="page-header__button page-header__button--secondary"
                    onClick={(e)=>{
                        //props.dispatch(removeExpense({id:props.match.params.id}));
                        console.log(props.match.params.id)
                        props.dispatch(startRemoveExpense(props.match.params.id))
                        props.history.push('/dashboard')
                    }}
                >Remove Expense</button>

            </div>

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