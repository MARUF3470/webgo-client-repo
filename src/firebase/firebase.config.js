// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyAyY4aE8JT7OLUJl-wibGEeOwalYR18wdA",
    // authDomain: "webgo-personal-developer.firebaseapp.com",
    // projectId: "webgo-personal-developer",
    // storageBucket: "webgo-personal-developer.appspot.com",
    // messagingSenderId: "161113609311",
    // appId: "1:161113609311:web:103e6fa8e71b73c3caf7ea"
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);