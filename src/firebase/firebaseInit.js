import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCXPDU9msmZ-o7P4uPaCko5bzyV5LvQbk",
  authDomain: "invoice-app-75020.firebaseapp.com",
  projectId: "invoice-app-75020",
  storageBucket: "invoice-app-75020.appspot.com",
  messagingSenderId: "916199087916",
  appId: "1:916199087916:web:433c25001480b7f941d689",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
