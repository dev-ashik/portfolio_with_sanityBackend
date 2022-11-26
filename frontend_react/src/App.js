import React from 'react'

import './App.scss';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

// Time: 1:32:34
export default App