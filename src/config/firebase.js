// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSZFjDfHLvc4ODPCangk8rLLMm9x3thK8",
  authDomain: "ucrlibrarypetition.firebaseapp.com",
  projectId: "ucrlibrarypetition",
  storageBucket: "ucrlibrarypetition.appspot.com",
  messagingSenderId: "211767353655",
  appId: "1:211767353655:web:869a7106b5165710677ab2",
  measurementId: "G-YS0226GQXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);