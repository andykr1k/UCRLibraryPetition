import { useState } from 'react'
import { db } from '../config/firebase'
import { collection, addDoc } from "firebase/firestore"; 
import { Input, useToast, Button } from '@chakra-ui/react'

export default function Form() {
    const toast = useToast()
    var [Email, setEmail] = useState('')
  
    const writeContactData = async() => {
      try {
        await addDoc(collection(db, "signers"), {
          email: Email,
        });
        console.log("Document written with ID: " + Name );
      } catch (e) {
        console.error("Error adding document: " + Name, e);
      }
  
      Email = '';
    }

    const write = async(e) => {
      e.preventDefault();
      if (Email != ''){
        writeContactData();
        toast({
          title: 'You have been added to the petition.',
          status: 'success',
          position: 'top',
          variant: 'subtle',
          duration: 3000,
          isClosable: true,
          });
      } else {
        toast({
          title: 'Please Enter School Email.',
          status: 'error',
          position: 'top',
          variant: 'subtle',
          duration: 3000,
          isClosable: true,
          });
      }
    }

    return(
        <div className='p-5'>
            <form onSubmit={write} className='flex space-x-5'>
                <Input
                    focusBorderColor='blue.400'
                    variant='flushed'
                    placeholder='Enter School Email'
                    size='md'
                    color='black'
                    type="email"
                    onChange={ (e) => setEmail(e.target.value) }
                />
                <Button
                    type="submit"
                    variant='outline'
                    colorScheme='blue'
                    >
                    Submit
                </Button>
            </form>
        </div>
    )
}