import React from 'react';
import Row2Img from '../Images/section2.jpg';
import './Row2.css'

const Row2 = () => {
    return (
        <>
          <div className="row2 flex">
          <div className="img">
                <img src={Row2Img} alt="WebSeries"/>
            </div>
            <div className="contant">
                <h2>Download your shows to watch offline.</h2>
                <p>Save your favourites easily and always have something to watch.</p>
            </div>    
          </div>  
        </>
    );
};

export default Row2;