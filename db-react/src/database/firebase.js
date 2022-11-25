import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {};

const firebaseApp = initializeApp(firebaseConfig);
const database = getFirestore(firebaseApp); //정보가 올바르면 아래 파이어스토어 접근c
export default database;
