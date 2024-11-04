import React from 'react';

function ExperienciasCard({ nombre, descripcion, rating, fotoURL, bgColor, borderColor }) {
  return (
    <div className="cardEx" style={{ backgroundColor: bgColor, borderColor: borderColor }}>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <div className="star-rating">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</div>
      <img src={fotoURL} alt="Foto card" style={{ maxWidth: '100%', borderRadius: '5px' }} />
    </div>
  );
}

export default ExperienciasCard;