import React from 'react';
import './video.css';
import { videodata } from '../../assets/data';

const VideoFootage = () => {
 
  return (
    <> 
     <div className="vContainer">
        <h1 className="vTitle">Explore Afritours Video Footages of Activities Lined Up for You</h1>
        <p>Perfect for singles or group, find Your Next Destination<br/>
        ...& travel around Africa</p>
        
        <div className="vWrapper">
            {videodata.map((item, index)=>{
                return(
                    <div className="vCard" key={index}>
                        <video className='aVideo' controls autoPlay muted poster={item.poster} >
                          <source src={item.videoUri} type='video/mp4' />
                        </video>
                    </div>
                )
            })}
        </div>

    </div>                                     

    </>
  )
}

export default VideoFootage;
