import React, {useEffect, useRef} from 'react'
import './Contact.css'
import ContactCards from './ContactCards'
import ContactForm from './ContactForm'

function Contact() {
  const formRef = useRef(null);
  const mapRef = useRef(null);
  const tarjetasRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    };

    const observerOptions = {
      threshold: 0.3
    };

    const observerForm = new IntersectionObserver(observerCallback, observerOptions);
    const observerMap = new IntersectionObserver(observerCallback, observerOptions);
    const observerTarjetas = new IntersectionObserver(observerCallback, observerOptions);

    if (formRef.current) observerForm.observe(formRef.current);
    if (mapRef.current) observerMap.observe(mapRef.current);
    if (tarjetasRef.current) observerTarjetas.observe(tarjetasRef.current);

    return () => {
      if (formRef.current) observerForm.unobserve(formRef.current);
      if (mapRef.current) observerMap.unobserve(mapRef.current);
      if (tarjetasRef.current) observerTarjetas.unobserve(tarjetasRef.current);
    };
  }, []);
  return (
    <section id="Contact">
    <h2>Contacto </h2>
    <div className ="form-map">
    <div className="contact-form" ref={formRef}>
    <ContactForm/>
        
    </div>
    <div className="map-container" ref={mapRef}>   
    <iframe 
          className="map"  
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.4642745272427!2d-71.30212922406243!3d-38.913364571720656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96131b700b3154a5%3A0x55ea8cb724fd35fc!2sRUKA%20DIAK!5e0!3m2!1ses-419!2sar!4v1723433130219!5m2!1ses-419!2sar" 
          width="600" 
          height="450" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="RUKA DIAK Map"
        />
        </div>
    </div> 
    <div className='contact-cards' ref={tarjetasRef}>
    <ContactCards/>
    </div>
    
</section>
  )
}

export default Contact
