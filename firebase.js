import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCncyPCl2cGFbxYI9t7SdmflrNzS0pyWrc",
  authDomain: "react-notes-573a6.firebaseapp.com",
  projectId: "react-notes-573a6",
  storageBucket: "react-notes-573a6.appspot.com",
  messagingSenderId: "41143308861",
  appId: "1:41143308861:web:3baca0b19f81c0ad6e1054"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
