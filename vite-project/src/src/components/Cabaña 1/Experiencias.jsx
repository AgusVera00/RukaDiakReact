import React from 'react'
import { useState } from 'react'
import ExperienciasForm from './ExperienciasForm.jsx'
import ExperienciasCard from './ExperienciasCard.jsx'
import proptypes from 'prop-types'
import './Experiencias.css'

function Experiencias({ tituloEx, textEx }) {
  const [experienciasCards, setExperienciasCards] = useState([]);
  const addCard = (newCardData) => {
    setExperienciasCards((prevCards) => [...prevCards, newCardData]);
  };
  return (
    <section className="compartir">
        <div className="container-compartir">
        <h2 className="titulo-compartir">{tituloEx}</h2>
        <p>
            {textEx}
        </p>

        <ExperienciasForm addCard={addCard} />
        </div>
        <div id="cardContainer">
        {experienciasCards.map((card, index) => (
          <ExperienciasCard
            key={index}
            nombre={card.nombre}
            descripcion={card.descripcion}
            rating={card.rating}
            fotoURL={card.fotoURL}
            bgColor={card.bgColor}
            borderColor={card.borderColor}
          />
        ))}
      </div>
        

    </section>
  )
}

Experiencias.propTypes = {
  tituloEx : proptypes.string.isRequired,
  textEx : proptypes.string.isRequired,
}

export default Experiencias
