// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTevYPJhnK3rd1G3GZnRN9_rii4jLJr-k",
  authDomain: "clone-7e5c5.firebaseapp.com",
  projectId: "clone-7e5c5",
  storageBucket: "clone-7e5c5.appspot.com",
  messagingSenderId: "24656134131",
  appId: "1:24656134131:web:ba478209dcf5e69b6d1c86",
  measurementId: "G-FTNZKTC33D"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export {auth,db}