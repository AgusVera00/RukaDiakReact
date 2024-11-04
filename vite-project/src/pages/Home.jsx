import React from 'react';
import About from '../components/Home/About.jsx';
import Cards from '../components/Home/Cards.jsx';
import Preguntas from '../components/Home/Preguntas.jsx';
import Contact from '../components/Home/Contact.jsx';
import App from '../App.jsx';
import imgAbout1 from '../imagenes/moquehue-sobre.jpg';
import imgAbout2 from '../imagenes/moquehue5.jpg';





function Home() {
  const titleAbout = "Sobre nosotros"; 
  const textAbout = "Somos una familia que tenía el sueño de vivir en un lugar tan paradisíaco como es nuestro bellísimo sur argentino. " +
        "Logramos construir la primera cabaña en el año 2000. De ahí, nuestro objetivo fue crecer como emprendimiento turístico " +
        "y hoy en día contamos con 4 cabañas y próximamente una casa de comidas propias, para poder compartir con ustedes también este hermoso sueño. " +
        "¿Querés conocernos? ¡Te invitamos a ver qué te ofrecemos!";
  
  return (

    <App>
    <About
    textAbout={textAbout}
    titleAbout={titleAbout}
    imgAbout1={imgAbout1}
    imgAbout2={imgAbout2}
    imgAlt='paisaje-moquehue'
    />
    <Cards/>
    <Preguntas/>
    <Contact/> 
    </App>

  );
};

export default Home;