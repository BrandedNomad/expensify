

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense, removeExpense, editExpense,startSetExpenses} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import Firebase from './firebase/firebase'
import {firebase} from './firebase/firebase';

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




ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx, document.getElementById('root'));
})

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        console.log('log in')
    }else{
        console.log('log out')
    }
})
