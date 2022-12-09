import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <>
          <div className="footer">
            <p>Questions? Call <span>000-800-040-1843</span></p>
            <div className="listWrapper">
                <div className="list">
                    <ul>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">Investor Relations</a></li>
                        <li><a href="/">Privacy</a></li>
                        <li><a href="/">Speed Test</a></li>
                    </ul>
                </div>
                <div className="list">
                    <ul>
                        <li><a href="/">Help Centre</a></li>
                        <li><a href="/">Jobs</a></li>
                        <li><a href="/">Cookie Preferences</a></li>
                        <li><a href="/">Negel Notices</a></li>
                    </ul>
                </div>
                <div className="list">
                    <ul>
                        <li><a href="/">Account</a></li>
                        <li><a href="/">Way To Watch</a></li>
                        <li><a href="/">Corporate Information</a></li>
                        <li><a href="/">Only On Netflix</a></li>
                    </ul>
                </div>
                <div className="list1">
                    <ul className="listGrid">
                        <li><a href="/">Media Centre</a></li>
                        <li><a href="/">Terms Of Use</a></li>
                        <li><a href="/">Cantant Us</a></li>
                    </ul>
                </div>
            </div>
            <div className="option flex">
                <select id="lang">
                    <option value="english">English</option>
                    <option value="hindi">हिंदी</option>
                </select>
            </div>
            <p className="name">Netflix India</p>
          </div>  
        </>
    );
};

export default Footer;