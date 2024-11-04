import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

function Reserva({ selectedDates }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [setFormData] = useState({
    nombre: '',
    telefono: '',
    mensaje: ''
  });

  const onSubmit = (data) => {
    console.log('Formulario enviado:', data);
 
    setFormData(data); 
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      telefono: '',
      mensaje: ''
    });
  };

  useEffect(() => {
    const reserv = document.querySelectorAll('.container-reserva');
    
    const observerReserv = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, {
      threshold: 0.3 
    });

    reserv.forEach(reservItem => {
      observerReserv.observe(reservItem);
    });


    return () => {
      reserv.forEach(reservItem => {
        observerReserv.unobserve(reservItem);
      });
    };
  }, []);

  return (
    <section className="container-reserva">
      <h3 className="titulo-reserva">Reserva ahora:</h3>
      <form className="reservar" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="nombre">Nombre y Apellido</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Nombre y Apellido"
          {...register("nombre", {
            required: { value: true, message: 'Nombre y Apellido es requerido' },
            minLength: { value: 5, message: 'Nombre y Apellido debe tener al menos 5 caracteres' },
            maxLength: { value: 40, message: 'Nombre y Apellido debe tener máximo 40 caracteres' }
          })}
        />
        {errors.nombre && <p className="error-message">{errors.nombre.message}</p>}

        <label htmlFor="telefono">Teléfono</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          placeholder="Teléfono"
          {...register("telefono", {
            required: { value: true, message: 'Teléfono es requerido' },
            minLength: { value: 10, message: 'Teléfono debe tener al menos 10 números' },
            maxLength: { value: 15, message: 'Teléfono debe tener máximo 15 números' },
            pattern: { value: /^[0-9]+$/, message: 'Teléfono inválido' }
          })}
        />
        {errors.telefono && <p className="error-message">{errors.telefono.message}</p>}

        <label htmlFor="selectedDates">Fechas seleccionadas</label>
        <input
          type="text"
          id="selectedDates"
          placeholder="Fechas seleccionadas"
          value={selectedDates}
          readOnly
        {...register("selectedDates")}
        />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          placeholder="Tu mensaje"
          {...register("mensaje", { required: 'Mensaje es requerido' })}
        />
        {errors.mensaje && <p className="error-message">{errors.mensaje.message}</p>}

        <div className="button-container">                
          <button type="submit">Enviar</button>
          <button className="button-delete" type="button" onClick={handleReset}>Borrar</button>
        </div>
      </form>
    </section>
  );
}

export default Reserva;