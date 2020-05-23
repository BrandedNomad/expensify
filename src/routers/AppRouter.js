import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header'
import NotFoundPage from "../components/NotFoundPage";
import HelpPage from "../components/HelpPage";
import EditExpensePage from "../components/EditExpensePage";
import AddExpensePage from "../components/AddExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import LoginPage from "../components/LoginPage";

const AppRouter =()=>{
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" component={LoginPage} exact={true}/>
                    <Route path="/dashboard" component={ExpenseDashboardPage} exact={true}/>
                    <Route path="/create" component={AddExpensePage} exact={true}/>
                    <Route path="/edit/:id" component={EditExpensePage} exact={true}/>
                    <Route path="/help" component={HelpPage} exact={true}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter

