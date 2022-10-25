// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { motion } from "framer-motion";
import googleLogo from '../assets/googlelogo.png'
import 'firebase/firestore';
import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
export const auth = getAuth();

export function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }
  return (
    <div className=''>
      <motion.button       
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }} 
      className='border-2 border-sky-600 rounded-lg shadow-lg p-3 text-center text-sky-600 flex items-center justify-center' 
      onClick={signInWithGoogle}
      >
      Sign In
      </motion.button>
    </div>
  )
}

export function SignOut() {
  return auth.currentUser && (
    <div class=''>
      <motion.button       
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }} 
      className='border-2 border-sky-600 rounded-lg shadow-lg p-3 text-center text-sky-600 flex items-center justify-center' 
      onClick={() => auth.signOut()}
      >
            Sign Out
      </motion.button>
    </div>

  )
}