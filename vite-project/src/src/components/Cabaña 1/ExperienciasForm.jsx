import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ExperienciasForm({ addCard }) {
  const createCard = (data) => {
    addCard(data);
  };
    const [formData, setFormData] = useState({
      nombre: '',
      descripcion: '',
      fotoURL: '',
      rating: 0,
      bgColor: '#ffffff',
      borderColor: '#000000'
    });

    const handleStarRating = (rating) => {
        setFormData({ ...formData, rating });
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        
        createCard(formData);
        setFormData({
          nombre: '',
          descripcion: 'Escribe tu experiencia',
          fotoURL: 'https://picsum.photos/200',
          rating: 0,
          bgColor: '#ffffff',
          borderColor: '#000000'
        });
      };

    return (
        <div>
        <form id="formEx" onSubmit={handleSubmit}>
            <label htmlFor="nombre-apellido">Nombre y Apellido</label>
            <input
          type="text"
          id="nombre-apellido"
          name="nombre-apellido"
          required
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
        />
        
            <label htmlFor="descripcion">Contanos tu experiencia:</label>
            <textarea
          name="descripcion"
          id="descripcion"
          required
          value={formData.descripcion}
          onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
        />
            
            <label>Puntuación:</label>
            <div className="star-rating">
            {[1, 2, 3, 4, 5].map((value) => (
            <span
                key={value}
                className={`star ${value <= formData.rating ? 'selected' : ''}`}
                 data-value={value}
                onClick={() => handleStarRating(value)}>
                 &#9733;
            </span>
          ))}
        </div>
        
        <label htmlFor="foto-ex">Ingresa tu foto:</label>
        <input
          type="url"
          name="foto-ex"
          id="foto-ex"
          placeholder="https://picsum.photos/200"
          required
          value={formData.fotoURL}
          onChange={(e) => setFormData({ ...formData, fotoURL: e.target.value })}
        />
            <label htmlFor="card-bg-color">Color de fondo:</label>
        <input
          type="color"
          id="card-bg-color"
          name="card-bg-color"
          value={formData.bgColor}
          className="color"
          onChange={(e) => setFormData({ ...formData, bgColor: e.target.value })}
        />
             <label htmlFor="card-border-color">Color del borde:</label>
        <input
          type="color"
          name="card-border-color"
          id="card-border-color"
          value={formData.borderColor}
          className="color"
          onChange={(e) => setFormData({ ...formData, borderColor: e.target.value })}
        />
        
            <div className="button-container">                
                <button type="submit">Enviar</button>
                <button className="button-delete" type="reset">Borrar</button>
            </div>
        </form>
  
      
    </div>
  )
};

ExperienciasForm.propTypes = {
  addCard: PropTypes.func.isRequired,
};

export default ExperienciasForm
