import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';


const Hero = () => {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <div className='heroContainer'>
        <video src="/videos/africa.mp4"  autoPlay loop   />
        <h1>ADVENTURE AWAITS YOU</h1>
        <p>What are you waiting for?</p>
        <div className="heroBtns">
          <Link to='/register'> <button className='btn'>GET STARTED</button></Link>
          <Link to='/videofootage'><button className='btn'>WATCH ▶️ FOOTAGES</button></Link>
        </div>
    </div>
    
    </>
  )
}

export default Hero;