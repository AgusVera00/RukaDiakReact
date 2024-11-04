import React, {useState, useRef, useEffect} from 'react';
import './Preguntas.css';
import {faqData} from '../../data/data.js';

function Preguntas() {

    const [activeAccordion, setActiveAccordion] = useState(null);
    
    const acordeonFaqsRef = useRef([]);

  useEffect(() => {
    const observerFAQ = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    acordeonFaqsRef.current.forEach((acordeon) => {
      if (acordeon) {
        observerFAQ.observe(acordeon);
      }
    });

    return () => {
      acordeonFaqsRef.current.forEach((acordeon) => {
        if (acordeon) {
          observerFAQ.unobserve(acordeon);
        }
      });
    };
  }, []);
    const toggleAccordion = (id) => {
        setActiveAccordion(activeAccordion === id ? null : id);
      };

    

  return (
    <section id="FAQ">
      <h2>Preguntas Frecuentes</h2>
      {faqData.map((faq,index) => (
        <div key={faq.id} className="acordeonfaq" ref={(el) => (acordeonFaqsRef.current[index] = el)}>
          <input
            type="radio"
            name="acordeon"
            id={`faq-acordeon${faq.id}`}
            className="faq-acordeon"
            checked={activeAccordion === faq.id}
            onChange={() => toggleAccordion(faq.id)}
          />
          <label htmlFor={`faq-acordeon${faq.id}`}>
            {faq.question}
          </label>
          <div className="contenido-acordeon">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Preguntas;
