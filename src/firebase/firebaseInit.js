import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
