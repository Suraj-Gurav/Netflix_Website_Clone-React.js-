import React from 'react';
import './App.css';
import MainHeader from './Components/MainHeader';
 import Row1 from './Components/Row1';
 import Row2 from './Components/Row2';
import Row3 from './Components/Row3';
import Row4 from './Components/Row4';
import QuestionAns from './Components/QuestionAns';
import Footer from './Components/Footer';


const App = () => {
  return (
    <>
    <div className="container">
      <MainHeader/> 
       <Row1/> 
      <Row2/>
      <Row3/>
      <Row4/> 
      <QuestionAns/>
      <Footer/>
    </div>
    </>
  );
};

export default App;