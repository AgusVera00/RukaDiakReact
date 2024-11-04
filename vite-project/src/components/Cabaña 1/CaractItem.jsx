import React from 'react'
import PropTypes from 'prop-types'

function CaractItem({text}) {
  return (
    <div>
        <li>
            <i className="fa-solid fa-circle-check" style={{color: '#134190'}}></i> {text}
        </li>
    </div>
  )
}

CaractItem.propTypes = {
  text: PropTypes.string.isRequired, 
};


export default CaractItem
