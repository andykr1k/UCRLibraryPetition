// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBSZFjDfHLvc4ODPCangk8rLLMm9x3thK8",
  authDomain: "ucrlibrarypetition.firebaseapp.com",
  projectId: "ucrlibrarypetition",
  storageBucket: "ucrlibrarypetition.appspot.com",
  messagingSenderId: "211767353655",
  appId: "1:211767353655:web:869a7106b5165710677ab2",
  measurementId: "G-YS0226GQXE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
