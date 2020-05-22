//import

import {v4 as uuidv4} from "uuid";
import database from '../firebase/firebase'

//Action Generators
//ADD_EXPENSE
export const addExpense = (expense)=>{
    return {
        type: 'ADD_EXPENSE',
        expense
    }
}

export const startAddExpense=(expenseData = {})=>{
    return (dispatch)=>{
        const {
            description='',
            note = '',
            amount=0,
            createdAt = 0
        } = expenseData;
        const expense = {description,note,amount,createdAt}
        database.ref('expenses').push(expense).then((ref)=>{
            dispatch(addExpense({
                id:ref.key,
                working:"yes",
                ...expense
            }))
        })

    }
}

//REMOVE_EXPENSE
export const removeExpense = ({id}={}) =>{
    return {
        type: 'REMOVE_EXPENSE',
        id

    }
}
//EDIT_EXPENSES
export const editExpense = (id,update)=>{
    return {
        type:'EDIT_EXPENSE',
        id:id,
        update:update
    }

}

