import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyApazm1AOSJtdi3G6RDwuoDhChH72OjQqw",
  authDomain: "clothing-ecommerce-dd010.firebaseapp.com",
  databaseURL: "https://clothing-ecommerce-dd010.firebaseio.com",
  projectId: "clothing-ecommerce-dd010",
  storageBucket: "clothing-ecommerce-dd010.appspot.com",
  messagingSenderId: "722895662411",
  appId: "1:722895662411:web:753a10e036a6cf2ebeccce",
  measurementId: "G-XCNYTE4QBF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
