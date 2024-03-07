import React from 'react';
import './gallery.css'
import { gallery } from '../../assets/data';
import { Link } from 'react-router-dom';
import {FaClock, FaServicestack, FaBook, FaCalendarAlt} from 'react-icons/fa';

const Gallery = () => {
  return (
    <div className='gCon'>
      <div className="introx">
          <h1>LUXURY VACATION FOR SINGLES OR GROUP </h1> 
          <h2>Explore our luxury included vacations for singles or group</h2><br/>
          <p>Visit our top destinations whilst having the adventure of your life! Each day in our top destinations includes an exhilarating ride to world famous Polo Park, Tinapa Resorts, pristine snorkelling reefs, beach looks and guided Ogbunike Cave and Ojukwu bunker walks, all in one day! we have handpicked a selection of our favorite sights and activities to do in our top destinations. Our semi-rigid inflatable vessels are super fast allowing you to experience fun ride, adventure and education amongs the natural beauty of these top destinations. What are you waiting for ?   </p>
        </div>
        <div className="sdetails">
        <div className="sleft">
            <h2>LEADING SERVICES <FaServicestack/> </h2>
            <p>At AfriTour, we are your trusted partners for exploring the breathtaking beauty, rich culture, and unparalleled experiences that Africa has to offer. With a focus on personalized travel, we specialize in curating tailor-made itinaries, providing exceptional services, and making your dreams come true, one adventure at a time.
               
            </p>
        </div>
        <div className="sright">
            <h2>AUTOMATED BOOKING <FaBook/></h2>
            <p>Ready to explore AfriTour's best travel destinations ? We await you! Why not book right away as we receive and await your imminent arrival to a great Africa tour experience. You'll unleran, learn and relearn the beauty and great history of Africa while also embracing the cradle of humanity
            </p>
        </div>
        </div>
        <hr />
        <div className="infoc">
            <h3>Check Rates & Availability</h3>
            <h4>Get an additional 10% off </h4>
            <h4>12 hours Left &nbsp;<FaClock/></h4>
            <button>BOOK NOW AND SAVE</button>
        </div>
        <div className="book">
        <form action="">
                <div className="destinations">
                    <label htmlFor="destinations">Destination</label> 
                    <select name='destinations' id='destinations' className='select'>
                        <option value="tinapa">Tinapa Hotels and Resort</option>
                        <option value="cat">Nike Inn and Gardens</option>
                        <option value="hamster">Ogbunike Cave</option>
                        <option value="parrot">Igbo Landing</option>
                        <option value="spider">Agwe Udeme Beach</option>
                        <option value="goldfish">Badagry Resort</option>
                    </select>
                </div>
                <div className="check">
                    <label htmlFor="checkIn">Check-In <FaCalendarAlt/></label> 
                    <input type="date" name="checkIn" id="checkIn" />
                </div>
                <div className="check">
                    <label htmlFor="checkOut">Check-Out<FaCalendarAlt/></label>
                    <input type="date" name="checkOut" id="checkOut" />
                </div>
                <Link to={'/login'} style={{borderRadius:'5px', padding:'4px 8px', background:'green'}}>Book Now </Link>
            </form>
            </div>
            
        <h1 className="header">Time to travel, discover and explore<br /> more stunning vacation sites</h1>
        <div className="gWrap">
            {gallery.map((ga)=>{
                return(
                    <div className="gCard" key={ga.id}>
                        
                        <figure className='gLabel' data-category={ga.label}>
                          <img src={ga.imsrc} alt="" className="gImg" />
                        </figure>
                        <div className="gInfo">
                            <p className="gText">{ga.text}</p>
                            <span><Link to={'/login'}>Book Now & Save</Link></span>
                        </div>
                        
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default Gallery;