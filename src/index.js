import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app'
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDebR-hb-PM_nEJC65TWd64F8lK6lBjato",
  authDomain: "cart-91e11.firebaseapp.com",
  projectId: "cart-91e11",
  storageBucket: "cart-91e11.appspot.com",
  messagingSenderId: "545177527802",
  appId: "1:545177527802:web:3de6dc3fd6876d948db043"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
