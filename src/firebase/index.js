// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG0a7zVGlkZlgY1i9y5XYJdEBSW1dwCHI",
  authDomain: "haiphongtravel-datt2.firebaseapp.com",
  projectId: "haiphongtravel-datt2",
  storageBucket: "haiphongtravel-datt2.appspot.com",
  messagingSenderId: "1031863127242",
  appId: "1:1031863127242:web:b0342e795ae65bbbdfb833"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth }
