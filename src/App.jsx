import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Features from './components/Features'
import Model from './components/Model'

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Highlights/> 
      <Model/>
      <Features/>

    </main>
  )
}

export default App