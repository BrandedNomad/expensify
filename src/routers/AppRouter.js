import React from 'react';
import {BrowserRouter,Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import NotFoundPage from "../components/NotFoundPage";
import HelpPage from "../components/HelpPage";
import EditExpensePage from "../components/EditExpensePage";
import AddExpensePage from "../components/AddExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import LoginPage from "../components/LoginPage";
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory();

//swapped BrowserRouter for custom Router with history module

const AppRouter =()=>{
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <PublicRoute path="/" component={LoginPage} exact={true}/>
                    <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
                    <PrivateRoute path="/create" component={AddExpensePage}/>
                    <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
                    <PrivateRoute path="/help" component={HelpPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter

