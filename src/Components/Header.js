import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ThisIsStatusAuth } from './Auth';


const  Header = (props) =>  {


      var name = props.data.name;
      var occupation= props.data.occupation;
      var description= props.data.description;
      var city= props.data.address.city;
      var networks= props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    

    return (
      <header id="home">
            <div>
               <ThisIsStatusAuth/>
            </div>

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Afficher la navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Cacher la navigation</a>

         <ul id="nav" className="nav">
            <Link to="/login">S'identifier</Link>
            <li className="current"><a className="smoothscroll" href="#home">Accueil</a></li>
            <li><a className="smoothscroll" href="#about">A propos</a></li>
	         <li><a className="smoothscroll" href="#resume">CV</a></li>
            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">{name}.</h1>
            <h3>Je viens de {city} en <span>{occupation}</span>. {description}.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }


export default Header;
