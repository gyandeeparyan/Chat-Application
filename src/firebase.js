import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeBaEX4jm7ggsmI1tcCytGJNR3jblbOEM",
  authDomain: "chat-application-1ce89.firebaseapp.com",
  projectId: "chat-application-1ce89",
  storageBucket: "chat-application-1ce89.appspot.com",
  messagingSenderId: "685553403073",
  appId: "1:685553403073:web:ab3ad3ce77c78fd1dc0040",
  measurementId: "G-JV2DNWTY9G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
