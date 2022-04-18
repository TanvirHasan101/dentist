// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaY9q3kLwMKCL8VbAXACgmlGdye-lQ9Kw",
    authDomain: "dentist-ac019.firebaseapp.com",
    projectId: "dentist-ac019",
    storageBucket: "dentist-ac019.appspot.com",
    messagingSenderId: "677431110372",
    appId: "1:677431110372:web:087ceaba9912ed7e675af1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
