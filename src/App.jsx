import { useState } from 'react'
import { Footer } from './components'
import * as Pages from './pages'
import './App.css'

function App() {

  return (
    <div className="App">
      <h1>UCR Library Hours Petition</h1>
      <footer className='sticky bottom-0'>
        <Footer />
      </footer>
    </div>
  )
}

export default App
