import React from 'react'
import propTypes from 'prop-types'

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
    text: propTypes.string
}


export default CaractItem
