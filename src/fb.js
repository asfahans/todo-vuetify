// Your web app's Firebase configuration
import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAP9iKsLN8qA_JI1iBGtYLj4kNQZNmBUJ0",
    authDomain: "todo-ninja-e4b25.firebaseapp.com",
    databaseURL: "https://todo-ninja-e4b25.firebaseio.com",
    projectId: "todo-ninja-e4b25",
    storageBucket: "todo-ninja-e4b25.appspot.com",
    messagingSenderId: "139704259873",
    appId: "1:139704259873:web:267c40a355a03f3e255a60",
    measurementId: "G-M00R3X0SZ2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export default db;

  