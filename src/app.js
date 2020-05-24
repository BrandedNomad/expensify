

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter, {history} from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense, removeExpense, editExpense,startSetExpenses} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import Firebase from './firebase/firebase'
import {firebase} from './firebase/firebase';
import {login,logout} from './actions/auth'


const store = configureStore();

store.subscribe(()=>{
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses)
})




const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

let hasRendered = false
const renderApp = ()=>{
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true;
    }
}


ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));


firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        console.log('user id', user.uid);
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard')
            }
        })


    }else{
        console.log('log out')
        store.dispatch(logout())
        renderApp();
        history.push('/')
    }
})
