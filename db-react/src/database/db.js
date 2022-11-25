import database from "./firebase";
import { collection, getDocs } from "firebase/firestore/lite";

export const dbRef = collection(database, "posting"); //collection(접근할 db ,"db컬렉션이름")
const docsSnap = getDocs(dbRef); //db 데이터를 가져온다

export default docsSnap;
