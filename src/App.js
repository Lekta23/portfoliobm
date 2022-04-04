import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import General from './Components/General';
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Login from './Components/Login';

const  App = () =>  {



  
  

    return (

      <div className="App">
        <Router>
        <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<General />}></Route>
        </Routes>
        </Router>
      </div>
      
    );
  
}

export default App;
