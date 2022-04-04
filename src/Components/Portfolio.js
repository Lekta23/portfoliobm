import {React, useState} from 'react';
import { storage } from '../Firebase';
import { ref } from 'firebase/storage';


const Portfolio = (props) =>  {
  const [image, setImage] = useState('');
  const [Url, setUrl] = useState('');
  
  const upload = () => {
    if (image == null)
      return;
    setUrl("Getting Download Link...")
  
    // Sending File to Firebase Storage
    storage.ref(`/images/${image.name}`).put(image)
      .on("state_changed", alert("Bien envoyé !"), alert, () => {
  
        // Getting Download Link
        storage.ref("images").child(image.name).getDownloadURL()
          .then((url) => {
            setUrl(url);
          })
      });
  }


    if(props.data){
      var projects = props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
          <input type="file" className='mt-8'
          onChange={(e) => { setImage(e.target.files[0]) }} />
          <button className='bg-blue-400 py-4 px-8 rounded-md mt-12' onClick={upload}>Envoyer</button>
      </div>
   </section>
    );
  }
}

export default Portfolio;
