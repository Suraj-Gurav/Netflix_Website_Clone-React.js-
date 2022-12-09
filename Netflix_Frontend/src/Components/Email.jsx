import React from 'react';
import './Email.css';

const Email = () => {
    return (
        <>
            <div className="email">
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="inputEmail">
                     <input type="email" id="email" placeholder='Email Address' required/>
                     <button className='startBtn'>Get Start</button> 
                </div>  
            </div>  
        </>
    );
};

export default Email;