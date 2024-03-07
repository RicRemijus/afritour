import React, {useState, useEffect} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { FaTimes, FaBars, FaFly } from 'react-icons/fa';




const Navbar = () => {
 
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const showBtn =() =>{
    if(window.innerWidth <= 960){
      setButton(false);
    }else{
      setButton(true);
    }
  };
   
  useEffect(()=>{
    showBtn();
  },[]);
  window.addEventListener('resize', showBtn)
  return (
    <nav className='navbar'>
        <div className="navbarContainer">
            <Link to="/" className="navbarLogo" onClick={closeMobileMenu}>AfriTour <FaFly/> 
            </Link>
            <div className="menuIcon" onClick={handleClick}>
              {click ? <FaTimes className='fa-times' /> : <FaBars className='fa-times' /> }
            </div>
            <ul className={click ? 'navMenu active' : 'navMenu'}>
              <li className="navItem">
                <Link to='/' className='navLinks' onClick={closeMobileMenu}>Home</Link>
              </li>
              <li className="navItem">
                <Link to='/gallery' className='navLinks' onClick={closeMobileMenu}>Gallery</Link>
              </li>
              <li className="navItem">
                <Link to='/videofootage' className='navLinks' onClick={closeMobileMenu}>Activities</Link>
              </li>
              <li className="navItem">
                <Link to='/login' className='navLinksMobile bLinks' onClick={closeMobileMenu}>Login</Link>
              </li> 
            </ul>
            {button && <Link to='/register' className='btnOutline'>SIGN UP</Link>}
        </div>
    </nav>
  )
}

export default Navbar;