import React from 'react'
import ContactCardItem from './ContactCardItem'
import {contactCards} from '../../data/data.js'

function ContactCards() {

    return (
    <div className="container-tarjetas-contacto">{
        contactCards.map(card =>(
            <ContactCardItem
            key={card.id}
            icono={card.icono}
            subtitulo={card.subtitulo}
            descripcion={card.descripcion}
            descripcion2={card.descripcion2}
            />
        )) 
    }
    </div>
    )
}


export default ContactCards
