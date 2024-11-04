import React from 'react'
import PropTypes from 'prop-types'

function ContactCardItem({icono, subtitulo, descripcion, descripcion2}) {
  return (
    <div className="tarjetas">
        <i className={`${icono} contact-icon`} ></i>
        <article className="texto">
            <h4 className="sub-titulo">{subtitulo}</h4>
            <p className="descripcion">{descripcion}</p>
            {descripcion2 && <p className="descripcion">{descripcion2}</p>}
        </article>
    </div>
  )
}

ContactCardItem.propTypes = {
    icono: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    descripcion2: PropTypes.string,
}

export default ContactCardItem
