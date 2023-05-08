import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvyt1o3Q9Fd4nQa0JNrUNzdCRt08ISCwA",
  authDomain: "project1-9231f.firebaseapp.com",
  projectId: "project1-9231f",
  storageBucket: "project1-9231f.appspot.com",
  messagingSenderId: "549324197428",
  appId: "1:549324197428:web:699f4defd20cb565fac461",
  measurementId: "G-1YGY7R384H"
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
export const database = firebase.database();
export default firebase;