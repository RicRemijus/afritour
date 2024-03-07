import React from 'react';
import './explore.css';
import { card2, card3 } from '../../assets/data';
import { Link } from 'react-router-dom';

const Explore = () => {
  return (
    <div className='explore'>
        <h1 className='hs'>Explore these Epic Destinations</h1>
        <div className="e-Container">
            <div className="e-Wrapper">
                <ul className="e-Items">
                    {card2.map(card=>(
                     <li className="e-Item" key={card.id}>
                     <Link className='e-Links' to={'/gallery'}>
                         <figure className='e-Label' data-category={card.label}>
                             <img src={card.imsrc} alt="" className='e-img' />
                         </figure>
                         <div className="e-Info">
                             <h5 className="e-Text">{card.text}</h5>
                         </div>
                     </Link>
                    </li>
                    ))}
                   
                </ul>
                <ul className="e-Items">
                    {card3.map(card=>(
                     <li className="e-Item" key={card.id}>
                     <Link className='e-Links' to={'/gallery'}>
                         <figure className='e-Label' data-category={card.label}>
                             <img src={card.imsrc} alt="" className='e-img' />
                         </figure>
                         <div className="e-Info">
                             <h5 className="e-Text">{card.text}</h5>
                         </div>
                     </Link>
                    </li>
                    ))}
                   
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Explore;