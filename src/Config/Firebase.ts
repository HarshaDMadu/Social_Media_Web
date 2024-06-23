
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 

const firebaseConfig = {
 

  

  apiKey: "AIzaSyA0tzGsJovXVKGSJst6Ej9-2_avY1IiFfA",
  authDomain: "socialmediasite-e5caa.firebaseapp.com",
  projectId: "socialmediasite-e5caa",
  storageBucket: "socialmediasite-e5caa.appspot.com",
  messagingSenderId: "933409330285",
  appId: "1:933409330285:web:c721f507c8d0b087fc9b64"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);