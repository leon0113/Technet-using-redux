// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDk9GVZo2mZlSZK9cINvILjSLgLuRvhclA",
    authDomain: "technet-3113b.firebaseapp.com",
    projectId: "technet-3113b",
    storageBucket: "technet-3113b.appspot.com",
    messagingSenderId: "53046306381",
    appId: "1:53046306381:web:74a67e1715494301505e04",
    measurementId: "G-J8PNK74HYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);