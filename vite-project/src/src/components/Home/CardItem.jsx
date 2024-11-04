import React from 'react'
import PropTypes from 'prop-types'
import './Cards.css'


function CardItem({imgCard, imgAlt, tituloCard, textoCard, btnTitle, btnAction}) {
  return (
    <div className="card">
        <div className="face front">
            <img src={imgCard} alt={imgAlt}/>
            <h3>{tituloCard}</h3>
        </div>
            <div className="face back">
            <h3>{tituloCard}</h3>
            <p>{textoCard}</p>
            <div className="link">
                <button onClick={btnAction}>{btnTitle}</button>
            </div>     
        </div>
    </div>
  )
}

CardItem.propTypes = {
    imgCard: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    tituloCard: PropTypes.string.isRequired,
    textoCard: PropTypes.string.isRequired,
    btnTitle: PropTypes.string.isRequired,
    btnAction: PropTypes.func.isRequired,

}

export default CardItem
