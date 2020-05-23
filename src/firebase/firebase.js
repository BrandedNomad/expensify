import * as firebase from 'firebase';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "expensify-3a1e5.firebaseapp.com",
    databaseURL: "https://expensify-3a1e5.firebaseio.com",
    projectId: "expensify-3a1e5",
    storageBucket: "expensify-3a1e5.appspot.com",
    messagingSenderId: "932279113711",
    appId: "1:932279113711:web:d77772e36517d5065b881a"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider,database as default};
