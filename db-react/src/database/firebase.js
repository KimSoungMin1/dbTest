import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyBm7XU9rV_OKy9QI0No0gthPpwVN6giVX8",
  authDomain: "test-firebase-3808c.firebaseapp.com",
  projectId: "test-firebase-3808c",
  storageBucket: "test-firebase-3808c.appspot.com",
  messagingSenderId: "1048575199670",
  appId: "1:1048575199670:web:384846ba43922e6dd75917",
  measurementId: "G-4G688RNRQN",
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getFirestore(firebaseApp); //정보가 올바르면 아래 파이어스토어 접근c
export default database;
