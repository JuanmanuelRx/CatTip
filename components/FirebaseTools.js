// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBzu_QwHtomAIjB8U46KLdnxc3gkE4Z5jk",
  authDomain: "cattipuser.firebaseapp.com",
  projectId: "cattipuser",
  storageBucket: "cattipuser.firebasestorage.app",
  messagingSenderId: "698963252564",
  appId: "1:698963252564:web:0bc77f342a3f27314fa4c1",
  measurementId: "G-H398MYV2HH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const database = getDatabase(app);
export const storage = getStorage(app);

export default app;