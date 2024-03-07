import React from 'react';
import './offer.css'
import {MdAccessibility, MdHail, MdLiquor, MdPrivateConnectivity} from 'react-icons/md';

const Offer = () => {
  return (
    <>
       <section className='c-wrapper'> 
        <h1 className='flexColCenter offer'>What We Offer</h1>
        <div className="paddings innerWidth flexSpaceBetween c-container">
          {/**Left Side */}
          <div className="c-left flexEnd">
                    <img src="./images/offers.jpg" alt="" />
         </div>
            {/**right Side */}
            <div className="flexColStart c-right">
            
                <h1 className='orangeText'>Our Commitments</h1>
                <span className='primaryText'>Easy to Contact </span>
                <p>Traveling allows you to sleep late and perhaps take a nap in the afternoon. <br /> 
                 Ger some beauty rest! </p>
                <span className='secondaryText'>We are always ready to help you get the best value for your money. <br />
                  We believe a good place to live can make your life better and productive
                </span>
                <div className="flexColStart contactMode">
                    {/**First Row */}
                    <div className="flexStart row">
                        {/**1st mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexSpaceBetween icon">
                                    <MdAccessibility size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Our Pace</span>
                                </div>
                            </div>
                            <div className="secondaryText">Scheduled tours which often depart on predetermined, non-negotiable dates. Contains an array of famous sights grouped around a theme for medium to large groups. </div>
                        </div>
                        {/**2nd Mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexSpaceBetween icon">
                                    <MdPrivateConnectivity size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Secured</span>
                                    
                                </div>
                            </div>
                            <div className="secondaryText">Committed to protecting any information our clients share with us by adhering to strong security and confidentiality requirements. Your data is secure! </div>
                        </div>
                    </div>

                    {/**2nd Row */}
                    <div className="flexStart row">
                        {/**1st Mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexSpaceBetween icon">
                                    <MdLiquor size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Complements</span>
                                 
                                </div>
                            </div>
                            <span className='secondaryText'>We encourage you to exploreone-of-a-kind VIP Experiences that are exclusively available to Luxury Gold guests. VIP Experience makes you happy.</span>
                        </div>
                        {/**2nd Mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexSpaceBetween icon">
                                    <MdHail size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Guidance</span>
                                    
                                </div>
                            </div>
                            <span className="secondaryText">Private letters with full staff. Excursions with experienced captain and a passionate local guide who knows every nooks and crannies of these places. </span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    </section>
    </>
  )
}

export default Offer;