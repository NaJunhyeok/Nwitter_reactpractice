// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLCm59SvlnNG4S_UjogmOpw1vACST54-U",
  authDomain: "nwitter-practice-31358.firebaseapp.com",
  projectId: "nwitter-practice-31358",
  storageBucket: "nwitter-practice-31358.appspot.com",
  messagingSenderId: "803823558539",
  appId: "1:803823558539:web:62d4625eadbeacdb58598e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);