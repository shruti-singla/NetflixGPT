// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0Gl5F2EDCucGYaTgfKzNMBIO2wK_n9s4",
  authDomain: "netflix-gpt-f0475.firebaseapp.com",
  projectId: "netflix-gpt-f0475",
  storageBucket: "netflix-gpt-f0475.appspot.com",
  messagingSenderId: "353483801973",
  appId: "1:353483801973:web:44c2b662adba60cef57f3c",
  measurementId: "G-DSYQ0E2N31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();