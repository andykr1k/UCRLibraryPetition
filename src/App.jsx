import { useState } from 'react'
import { Footer, Form } from './components'
import * as Pages from './pages'
import { Box } from '@chakra-ui/react'
import './App.css'

function App() {

  return (
    <div className='w-full h-screen justify-center items-center'>
        <Box w='100%' h='100%' bgGradient='linear(to-t, white, blue.200)'/>
      <div className='absolute inset-0 justify-center items-center z-10 p-10'>
        <header>
          <h1 className='flex justify-center text-3xl font-bold'>UCR LIBRARY HOURS PETITION</h1>
        </header>
        <main className='flex-grow'>
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
