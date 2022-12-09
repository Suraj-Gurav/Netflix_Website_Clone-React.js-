import React from 'react';
import './Navbar.css';
import Logo from '../Images/logo.png';

const Navbar = () => {
    return (
        <>
            <div className="navbar flex">
                <div className="image flex">
                    <img src={Logo} alt="netflix"/>
                </div>
                <div className="option flex">
                    <select id="lang">
                        <option value="english">English</option>
                        <option value="hindi">हिंदी</option>
                    </select>
                    <button className='signIn'>Sign In</button>
                </div>
            </div>  
        </>
    );
};

export default Navbar;