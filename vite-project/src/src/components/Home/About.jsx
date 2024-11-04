import React, {useEffect, useRef} from 'react';
import './About.css';
import PropTypes from 'prop-types';


function About ({titleAbout, textAbout, imgAbout1, imgAbout2,imgAlt}) {
  const containerAboutRef = useRef(null);
  const aboutRef = useRef(null);
  const imgAbout1Ref = useRef(null);
  const imgAbout2Ref = useRef(null);

  useEffect(() => {
    const observerAbout = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutRef.current.classList.add('active');
            imgAbout1Ref.current.classList.add('active');
            imgAbout2Ref.current.classList.add('active');
          } else {
            aboutRef.current.classList.remove('active');
            imgAbout1Ref.current.classList.remove('active');
            imgAbout2Ref.current.classList.remove('active');
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (containerAboutRef.current) {
      observerAbout.observe(containerAboutRef.current);
    }

    return () => {
      if (containerAboutRef.current) {
        observerAbout.unobserve(containerAboutRef.current);
      }
    };
  }, []);

  return (
    
      <section id="About">
        <div className="container-about" ref={containerAboutRef}>
                <div className="about" ref={aboutRef}>
                    <h2>{titleAbout}</h2>

                    <p >{textAbout}</p>
                </div>    
                <div className="imagen-about" >
                    <img className="img-about-1" src={imgAbout1} alt={imgAlt} ref={imgAbout1Ref}/>
                    <img className="img-about-2" src={imgAbout2} alt={imgAlt} ref={imgAbout2Ref}/>
                </div>
        </div>
            <div className="button-container-mira">
                <a href="#Galery" className="boton-mira">Mirá!</a>
            </div>
        </section>
    
  );
};

About.propTypes = {
  titleAbout: PropTypes.string.isRequired,
  textAbout: PropTypes.string,
  imgAbout1: PropTypes.string.isRequired,
  imgAbout2: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,


};

export default About
