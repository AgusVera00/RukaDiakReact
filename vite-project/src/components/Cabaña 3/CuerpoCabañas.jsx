import React from 'react'
import { useEffect } from 'react'
import Caracteristicas from './Caracteristicas.jsx'
import Slider from '../Cabaña 1/Slider.jsx'
import '../Cabaña 1/CuerpoCabañas.css'

function CuerpoCabañas() {
  useEffect(() => {
    const car = document.querySelectorAll('.container-carac');

    const observerCar = new IntersectionObserver((entries) => {
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

    car.forEach(item => {
      observerCar.observe(item);
    });

    return () => {
      car.forEach(item => {
        observerCar.unobserve(item);
      });
    };
  }, []);
  return (
    <div className="cuerpo-cabaña">
      <Caracteristicas titulo='Cabaña3'/>
      <Slider/>
    </div>
  )
}

export default CuerpoCabañas