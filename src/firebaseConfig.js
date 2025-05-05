import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAHxawG2g_9BNc4H-NPj9vywKYc597KZ_Y",
  authDomain: "fiesta-6eca1.firebaseapp.com",
  projectId: "fiesta-6eca1",
  storageBucket: "fiesta-6eca1.firebasestorage.app",
  messagingSenderId: "611219224048",
  appId: "1:611219224048:web:5a51902858501ae8339935",
  measurementId: "G-1YNRJ7QFDD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};