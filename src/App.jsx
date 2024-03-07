import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
//import './App.css'
import Hero from './Components/Hero/Hero';
import Explore from './Components/Explore/Explore';
import Offer from './Components/Offer/Offer';
import Corperate from './Components/Corporate/Corperate';




function App() {
  

  return (
    <>
      <div>
      <Hero/>
      <Explore/>
       <Offer/>
       <Corperate/> 
      </div>
    </>
  )
}

export default App; 
