import React from 'react';
import Row4Img from '../Images/section4.png'
import './Row4.css';

const Row4 = () => {
    return (
        <>
          <div className="row4 flex">
          <div className="img">
                <img src={Row4Img} alt="cartoon"/>
            </div>
            <div className="contant">
                <h2>Create profiles for children.</h2>
                <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
            </div>    
          </div>  
        </>
    );
};

export default Row4;