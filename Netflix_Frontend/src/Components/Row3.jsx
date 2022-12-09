import React from 'react';
import Row3Img from '../Images/section3.png';
import './Row3.css';


const Row3 = () => {
    return (
        <>
          <div className="row3 flex">
            <div className="contant">
                <h2>Watch everywhere.</h2>
                <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <div className="img">
                <img src={Row3Img} alt="WebSeries"/>
                {/* <video class="videoSize video" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" autoplay loop></video> */}
            </div>
          </div>  
        </>
    );
};

export default Row3;