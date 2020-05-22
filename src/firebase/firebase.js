import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: 'https://expensify-3a1e5.firebaseio.com',
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default};

// const database = firebase.database()
//
// database.ref().on('value',(snapshot)=>{
//     console.log(snapshot.val())
// })
//
// const expenses = [{amount:100,date:"April"},{amount:80,date:"May"},{amount:90,date:"June"}]
//
//
// expenses.forEach((expense)=>{
//     database.ref('expenses').push(expense);
// })
//
//
//
// database.ref('expenses').once('value').then((snapshot)=>{
//     const newExpenses = []
//     snapshot.forEach((childSnapshot)=>{
//         newExpenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//
//     console.log(newExpenses)
//
// }).catch((error)=>{
//     console.log(error)
// })