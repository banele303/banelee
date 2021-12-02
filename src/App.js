import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Services from './components/pages/Services';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import ContactUs from './components/ContactUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import SignU from "./components/pages/SignU";
//import SignX from './components/pages/SignX';



function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      
        <Route exact path="/" element={<Home/>}/>
        <Route exact path='/Services'  element={<Services/>}/>
        <Route exact path='/products' element={<Products/>}/>
       <Route exact path='/ContactUs'  element={<ContactUs/>}/>
      { /* <Route exact path='/sign-up'  element={<AboutMe/>}/>  */}
    
      </Routes>
    </Router>
     
   </>
  );
}

export default App;
