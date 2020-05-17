//Action Generators
//ADD_EXPENSE
import {v4 as uuidv4} from "uuid";

export const addExpense = (
    {
        description='',
        note = '',
        amount=0,
        createdAt = 0
    }
)=>{
    return {
        type: 'ADD_EXPENSE',
        expense:{
            id:uuidv4(),
            description,
            note,
            amount,
            createdAt
        }
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

