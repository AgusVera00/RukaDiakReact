import React from 'react';
import CuerpoCabañas from '../components/Cabaña 3/CuerpoCabañas.jsx';
import CuerpoReserva from '../components/Cabaña 3/CuerpoReserva.jsx';
import Experiencias from '../components/Cabaña 1/Experiencias.jsx';
import Contact from '../components/Home/Contact.jsx';
import App from '../App.jsx';


function Cabaña3() {
  
  return (
      <App>

      <CuerpoCabañas/>
      <CuerpoReserva/>
      <Experiencias tituloEx='Contactanos tu experiencia!' textEx='En este aparado te invitamos a que nos cuentes como fue tu experiencia!'/>
      <Contact/>
      
      </App>
  )
}

export default Cabaña3