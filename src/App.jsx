import { useState, useEffect } from 'react'
import { db } from './config/firebase'
import { collection, addDoc, getCountFromServer } from "firebase/firestore"; 
import { Footer, Form, HourStats, HoursTable } from './components'
import * as Pages from './pages'
import { Box } from '@chakra-ui/react'
import UCR from './assets/ucr.jpg'
import './App.css'

function App() {
  var [DocsCount, setDocsCount] = useState('')

  const countingDocs = async () => {
    const coll = collection(db, "signers");
    const snapshot = await getCountFromServer(coll);
    console.log("Signed: " + snapshot.data().count);
    setDocsCount(snapshot.data().count);
  }

  const deleteEmptyDocs = async () => {
    // try {
    //   const emptyDocs = db.collection('signers').where('email','==','').get();
    //   emptyDocs.forEach((doc) => {
    //     doc.ref.delete();
    //   });
    // } catch (error) {
    //   console.error("Error Found - App.jsx Line 26");
    // }
    // async function deleteCollection() {
    //   const collectionRef = db.collection('signers');
    //   const query = collectionRef.where("email", "==", "").limit(500);
    
    //   return new Promise((resolve, reject) => {
    //     deleteQueryBatch(db, query, resolve).catch(reject);
    //   });
    // }
    
    // async function deleteQueryBatch(db, query, resolve) {
    //   const snapshot = await query.get();
    
    //   const batchSize = snapshot.size;
    //   if (batchSize === 0) {
    //     // When there are no documents left, we are done
    //     resolve();
    //     return;
    //   }
    
    //   // Delete documents in a batch
    //   const batch = db.batch();
    //   snapshot.docs.forEach((doc) => {
    //     batch.delete(doc.ref);
    //   });
    //   await batch.commit();
    
    //   // Recurse on the next process tick, to avoid
    //   // exploding the stack.
    //   process.nextTick(() => {
    //     deleteQueryBatch(db, query, resolve);
    //   });
    // }

    // deleteCollection();
    // deleteQueryBatch();
  }

  
  useEffect(() => {
    countingDocs();
    //deleteEmptyDocs();
  }, []);

  return (
    <div className='w-full h-screen justify-center items-center'>
        <Box w='100%' h='100%' bgGradient='linear(to-t, white, blue.200)'/>
      <div className='absolute inset-0 justify-center items-center z-10 p-10'>
        <header>
          <h1 className='flex justify-center text-3xl font-bold text-center	'>UCR LIBRARY PETITION</h1>
        </header>
        <main className='flex-grow'>
          <h2 className='flex justify-center text-xl text-stone-500 font-bold p-3 text-center	'>
            Studying late at night is a quintessential college experience.
          </h2>
          <div className='hidden md:grid place-items-center p-5 '>
            <img src={UCR} className='h-64 w-128 object-fill rounded-md'/>
          </div>
          <HoursTable />
          <h3 className='flex justify-center text-md font-bold text-stone-500 md:p-5 mt-2 ml-1 mr-1 md:ml-10 md:mr-10 text-center'>
            We pay tuition to succeed in our classes. Closing the library at 8 pm does not align with the standards of the students attending UCR. A quiet space is needed at all hours for all students especially students who don't have the accommodation of a quiet room in their homes. Please enter your school email below to be added to our petition. You will receive updates regarding the status of our petition as well as a count update for the amount of UCR students who have also signed.
          </h3>
          <div className='pb-5'>
            <Form />
            <div className='flex justify-center text-md font-bold text-blue-500 ml-1 mr-1 md:ml-10 md:mr-10 text-center'>
            Signed: {DocsCount} UCR Students
          </div>
          </div>
        </main>
        <footer className='fixed bottom-0 right-0 left-0'>
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default App
