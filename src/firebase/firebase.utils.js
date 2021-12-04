// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyC9D2CGVouCMFRVYjjCDN-0bWjVspYP2Cc",
  authDomain: "crwn-database-7d87d.firebaseapp.com",
  projectId: "crwn-database-7d87d",
  storageBucket: "crwn-database-7d87d.appspot.com",
  messagingSenderId: "1020855728387",
  appId: "1:1020855728387:web:07bee84c51b0880e785136",
  measurementId: "G-SRF71J281R",
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
