// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyCNBKA2-9-hwSR51W_dTeQkUVKM_CHAyO0",
  authDomain: "ngl-knockoff.firebaseapp.com",
  databaseURL: "https://ngl-knockoff-default-rtdb.firebaseio.com",
  projectId: "ngl-knockoff",
  storageBucket: "ngl-knockoff.appspot.com",
  messagingSenderId: "303503322190",
  appId: "1:303503322190:web:1f933c1fe33d60c52de71f",
  measurementId: "G-SQX6ZCEGER"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);