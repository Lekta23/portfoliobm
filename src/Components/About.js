import React from 'react';
import image from '../assets/profilepic.jpg'


const About = (props) =>  {
  

   
      var name = props.data.name;
      var bio = props.data.bio;
      var street = props.data.address.street;
      var city = props.data.address.city;
      var state =props.data.address.state;
      var zip = props.data.address.zip;
      var phone= props.data.phone;
      var email = props.data.email;

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={image} alt="BOIDIN Mathieu" />
         </div>
         <div className="nine columns main-col">
            <h2>A propos de moi : </h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Mes contacts</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span><br />
                     <a target='_blank' href='https://firebasestorage.googleapis.com/v0/b/boidin-mathieu.appspot.com/o/Boidin_Mathieu_CV.pdf_4.pdf?alt=media&token=d9b4a8bf-6add-4556-ac15-284f777c1aea'>CV en PDF</a>
					   </p>
               </div>
               <div>
               
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }


export default About;
