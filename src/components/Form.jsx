import { useState } from 'react'
import { db } from '../config/firebase'
import { collection, addDoc } from "firebase/firestore"; 
import { Input, useToast, Button } from '@chakra-ui/react'

export default function Form() {
    const toast = useToast()
    var [Email, setEmail] = useState('')
  
    const writeContactData = async(e) => {
      e.preventDefault();
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
    return(
        <div className='p-5'>
            <form onSubmit={writeContactData} className='flex space-x-5'>
                <Input
                    focusBorderColor='blue.400'
                    variant='flushed'
                    placeholder='Enter your Email for Updates!'
                    size='md'
                    color='black'
                    onChange={ (e) => setEmail(e.target.value) }
                />
                <Button
                    type="submit"
                    variant='outline'
                    colorScheme=''
                    onClick={() =>
                        toast({
                        title: 'You have been added to our newsletter.',
                        status: 'info',
                        position: 'top',
                        variant: 'subtle',
                        duration: 3000,
                        isClosable: true,
                        })
                    }
                    >
                    Submit
                </Button>
            </form>
        </div>
    )
}