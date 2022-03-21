import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Login from './Components/Login';

const  App = () =>  {

  const resumeData = require('./resumeData.json');

  
  

    return (

      <div className="App">
        <Router>
        <Routes>
        <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Header data={resumeData.main}/>

        
        <About data={resumeData.main}/>
        <Resume data={resumeData.resume}/>
        <Portfolio data={resumeData.portfolio}/>
        <Footer data={resumeData.main}/>
        </Router>
      </div>
      
    );
  
}

export default App;
