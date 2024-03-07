import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const Layout = () => {
  
  return (
    <div style={{color:'white'}}>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout;