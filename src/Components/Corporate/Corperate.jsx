import React from 'react';
import './corperate.css';
import { Link } from 'react-router-dom';
import {FaBusinessTime, FaHandHoldingUsd, FaPlaneDeparture} from 'react-icons/fa';

const Corperate = () => {
  return (
    <>
    <div className='cop'>
        <h1 className='hs'>Corporate Packages</h1>
        
        <div className="c-Container">
            <div className="c-Wrapper">
                <div className="card1">
                   
                    <div className="flexColStart detail">
                        <span className='primaryText'><FaBusinessTime size={25}/> 24/7 Dedicated Service</span>   
                    </div>
                    <hr />
                    <span className='secondaryText'>The award winning hotel offers a complete luxury vacation. A luxurious retreat with unmatched dinning options.</span>
                    <br /> <br />
                    <span className="needs">
                        <ul>
                            
                            <li>Please Check Available Services</li>
                            <li>Please Check Wifi, Power and comfort</li>
                            <li>Call Us Now</li>
                        </ul> <br />
                    <Link to="/login">Book Now</Link>
                    </span>
                    
                </div>
                <div className="card1">
                
                    <div className="flexColStart detail">
                     <span className='primaryText'> <FaPlaneDeparture size={25} />  Corperate Lounge</span>   
                    </div> <hr />
                    <span className='secondaryText'>This award-winning hotel offers the complete luxury escape. A luxury retreat with unparalleled dinning options.</span>
                    <br /> <br />
                    <span className="needs">
                    <ul>  
                        <li>Please Check Availability</li>
                        <li>Please Check room rates</li>
                        <li>Call Us Now</li>
                    </ul> <br />
                    <Link to="/login">Book Now</Link> 
                    </span>
                </div>
                <div className="card1">
                    <div className="flexColStart detail">
                     <span className='primaryText'>  <FaHandHoldingUsd size={25} /> Value for Money</span> 
                     
                    </div>
                    <hr />
                    <span className='secondaryText'>We care for our users and ensure you have value for your money. An opulent hideaway with unrivaled serenity, relaxation and eating options.</span>
                    <br /> <br />
                    <span className="needs">
                    <ul>
                        <li>Please check the schedule</li>
                        <li>Please verify the rates of the accomodation</li>
                        <li>Make your reservation(s) </li>
                    </ul> <br />
                    <Link to="/login">Book Now</Link>
                    </span>
                    
                </div>
                
            </div>
        </div>

    </div>

    </>
  )
}

export default Corperate