import React from 'react';
import Row1Img from '../Images/tv.png';
import './Row1.css';

const Row1 = () => {
    return (
        <>
          <div className="row1 flex">
            <div className="contant">
                <h2>Enjoy on your TV.</h2>
                <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div className="img">
                <img src={Row1Img} alt="WebSeries"/>
                {/* <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" autoPlay loop></video> */}
            </div>
          </div>  
        </>
    );
};

export default Row1;