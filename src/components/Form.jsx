import { useEffect, useState } from 'react'
import { db, SignIn, auth, SignOut } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, addDoc, doc, documentId } from "firebase/firestore"; 
import { Input, useToast, Button } from '@chakra-ui/react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { motion } from 'framer-motion';
export default function Form() {
    const toast = useToast()
    const [user, loading, error] = useAuthState(auth);
    const [signed, setSigned] = useState(false);
    const writeContactData = async() => {
      try {
        await addDoc(collection(db, "signed"), {
          email: user.email,
          name: user.displayName
        });
        console.log("Document written with ID: " + documentId );
      } catch (e) {
        console.error("Error adding document: " + name, e);
      }
    }

    const write = async(e) => {
      e.preventDefault();
      writeContactData();
      toast({
        title: 'You have been added to the petition.',
        status: 'success',
        position: 'top',
        variant: 'subtle',
        duration: 3000,
        isClosable: true,
        });
      }

      const checking = async() => {
        // const dref = collection(db, "signed");
        // const data = dref.where("email", "==", "akrik001@ucr.edu");
        // if (data.empty) {
        //   console.log('No matching documents.');
        //   setSigned(false);
        //   return;
        // }  else {
        //   setSigned(true);
        //   return;
        // }
        }
    
        // useEffect(() => {
        //   checking();
        // }, []);

    return(
        <div className='grid place-items-center p-3'>
        { user ?
          <div className='grid place-items-center space-y-2'>
                <motion.button
                    className='border-blue-600 border-2 p-2 rounded-lg'
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }} 
                    onClick={write}
                    >
                    Sign Petition
                </motion.button>
                <SignOut />
            </div>
        :
        <div className='grid place-items-center w-48 h-16'>
        { signed
        ?
        <SignOut />
        :
        <SignIn />
        }
        </div>
        }
        </div>
    )
}