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

export const startRemoveExpense = (id)=>{
    return (dispatch)=>{
        database.ref('expenses/' + id).remove().then(()=>{
            dispatch(removeExpense({id:id}))
        }).catch((error)=>{
            return {error:error}
        })
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

export const startEditExpense = (id,updatedExpense)=>{
    return (dispatch)=>{
        database.ref('expenses/' + id).update(updatedExpense).then(()=>{
            dispatch(editExpense(id,updatedExpense))
        }).catch((error)=>{
            return {error:error}
        })
    }
}

//SET_EXPENSES
export const setExpenses = (expenses)=>{
    return {
        type: 'SET_EXPENSES',
        expenses
    }

};

export const startSetExpenses = ()=>{
    return (dispatch)=>{
        return database.ref('expenses').once('value').then((snapshot)=>{
            const expenses = []
            snapshot.forEach((childSnapshot)=>{
                expenses.push({
                    id:childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(expenses))


        }).catch((error)=>{
            return {error:error}
        })
    }

};

