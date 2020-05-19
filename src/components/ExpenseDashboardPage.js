import React from 'react';
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilter";
import ExpensesSummary from "./ExpensesSummary"

const ExpenseDashboardPage = ()=>{
    return (
        <div>
            <ExpensesSummary/>
            <ExpenseListFilters/>
            <ExpenseList/>
        </div>
    )
}

export default ExpenseDashboardPage;