import { useState } from 'react'
import { Footer, Form, HourStats } from './components'
import * as Pages from './pages'
import { Box } from '@chakra-ui/react'
import './App.css'

function App() {

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
          <HourStats />
          <h3 className='flex justify-center text-md font-bold text-stone-500 md:p-5 ml-1 mr-1 md:ml-10 md:mr-10 text-center'>
            We pay tuition to succeed in our classes. Closing the library at 8 pm does not align with the stadards of the students attending UCR. A quiet space is needed at all hours for all students especially students who don't have the accommodation of a quiet room in their homes.
          </h3>
          <Form />
        </main>
        <footer className='fixed bottom-0 right-0 left-0'>
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default App
