import React from 'react'
import Footer from './components/footer'
import Main from './components/main'
import Navbar from './components/navbar'



import './index.css'

const pokemonApp = () => {
  return (
    <div className='body'>
      <Navbar />
      <Main />
      <Footer />

    </div>
  )
}

export default pokemonApp