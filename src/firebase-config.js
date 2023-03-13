
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDjDhfQT0PQMWGdFBgz9OQOOQKrYBoA4o",
  authDomain: "blogstuff-57dc6.firebaseapp.com",
  projectId: "blogstuff-57dc6",
  storageBucket: "blogstuff-57dc6.appspot.com",
  messagingSenderId: "790734761438",
  appId: "1:790734761438:web:fef5c1afd0b458ec22414f",
  measurementId: "G-E72439Q4HF"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);  