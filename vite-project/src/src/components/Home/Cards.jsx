import React from 'react'
import PropTypes from 'prop-types'
import './Cards.css'
import CardItem from './CardItem'
import {cards} from '../../data/data'

function Cards() {
  
  return <section id="Galery" >
    <div className="container-galery">
    
    {cards.map(card => ( 
    <CardItem
    key={card.id}
    imgAlt={card.imgAlt} 
    imgCard={card.imgCard} 
    tituloCard={card.tituloCard} 
    textoCard={card.textoCard} 
    btnTitle={card.btnTitle} 
    btnAction={card.btnAction}/>
  ))} 
  
    </div>
  </section>
}

Cards.propTypes = {
    Cards: PropTypes.arrayOf(
        PropTypes.shape({
            imgCard: PropTypes.string.isRequired,
            imgAlt: PropTypes.string.isRequired,
            tituloCard: PropTypes.string.isRequired,
            textoCard: PropTypes.string.isRequired,
            btnTitle: PropTypes.string.isRequired,
            btnAction: PropTypes.func.isRequired,
        })
    )
}

export default Cards
