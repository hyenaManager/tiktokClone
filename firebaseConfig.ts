// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMd35E63bB-mWeeX5gg0wajkN1wUUw2NM",
  authDomain: "tiktokclone-c4e6c.firebaseapp.com",
  projectId: "tiktokclone-c4e6c",
  storageBucket: "tiktokclone-c4e6c.appspot.com",
  messagingSenderId: "988425669616",
  appId: "1:988425669616:web:e7145dd0e598c2cef86b35",
  measurementId: "G-G268M1CPP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const firebase_auth = getAuth(app)