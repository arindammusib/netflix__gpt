// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-BOFcPZAKKU8asoCSIw7jy3ZIu45ADjU",
  authDomain: "netflix-gpt-25252.firebaseapp.com",
  projectId: "netflix-gpt-25252",
  storageBucket: "netflix-gpt-25252.appspot.com",
  messagingSenderId: "29796774501",
  appId: "1:29796774501:web:6404e80b2ad2abcd040c8c",
  measurementId: "G-7XCND7MCTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();