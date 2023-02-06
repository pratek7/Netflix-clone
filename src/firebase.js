import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5dOR_8ciVnXwGyURh7zsRJ1b6tu_oPfU",
  authDomain: "netflix-73fb6.firebaseapp.com",
  projectId: "netflix-73fb6",
  storageBucket: "netflix-73fb6.appspot.com",
  messagingSenderId: "400313978030",
  appId: "1:400313978030:web:9a41e30bc8660ecce5b13f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
