import React from 'react';
import proptypes from 'prop-types';
import CaractItem from './CaractItem.jsx';
import {caracteristicasCabaña3} from '../../data/data.js';

function Caracteristicas({titulo}) {
  return (
    <div className="container-carac">
      <h1 className="titulo-cabaña">{titulo}</h1>
      <p className="texto-cabaña">Consta de lo siguiente:</p>
      <br />
      <ul className="caracteristicas">
        {caracteristicasCabaña3.map((caract, index) => (
          <CaractItem key={index} text={caract} />
        ))}
      </ul>
    </div>
  )
}

Caracteristicas.propTypes = { 
  titulo: proptypes.string.isRequired,
}

export default Caracteristicas
