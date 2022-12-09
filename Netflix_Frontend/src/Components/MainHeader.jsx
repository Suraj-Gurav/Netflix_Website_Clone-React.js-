import React from 'react';
import './MainHeader.css';
import Navbar from './Navbar';
import Content from './Content';
import Email from './Email';

const MainHeader = () => {
    return (
        <>
        <div className="background">
           <Navbar/>
           <Content/>
           <Email/> 
        </div>   
        </>
    );
};

export default MainHeader;