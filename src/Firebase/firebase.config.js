// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ96ZaqbNyrejKCBhzih68uWMpLPuU3Rs",
  authDomain: "module-fifty-one-592c8.firebaseapp.com",
  projectId: "module-fifty-one-592c8",
  storageBucket: "module-fifty-one-592c8.appspot.com",
  messagingSenderId: "748643392913",
  appId: "1:748643392913:web:4db880b78065b2d1de8e30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;