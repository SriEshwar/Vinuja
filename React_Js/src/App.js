// import logo from './logo.svg';
import './App.css';
import React from 'react';
import './index.css';
// import Student from './basics/Student';
import ClickCounter from './HOC/ClickCounter';
import HoverCounter from './HOC/HoverCounter';
// import Loggin from './basics/Loggin';
// import Employee from './basics/Employee';
// import Product from './basics/Product';

function App() {
 
  return (
    // <Employee/>
    //  <Product/>
    // <Loggin/>


    // dynamic content rendering----props
    // <Student Name="Vinuja" Age={21} Qualification="B.Tech"/>,
    // <Student Name="Nandhini" Age={22} Qualification="B.E"/>,
    // <Student Name="Jana" Age={22} Qualification="B.E"/>

    // <Counter/>
    <>
    <ClickCounter />
    <HoverCounter />
    </>
  )
}

export default App;
