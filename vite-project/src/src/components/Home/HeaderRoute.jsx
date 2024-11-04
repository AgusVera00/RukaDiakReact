import React, { useEffect, useRef } from 'react';
import './Header.css'; 
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function HeaderRoute ({dropdownTitle , dropdownOptions}) {
    const sectionBienvenidaRef = useRef(null);
    const homeRef = useRef(null);

    useEffect(() => {
        const observerBienvenida = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, {
            threshold: 0.5
        });

        if (sectionBienvenidaRef.current) {
            observerBienvenida.observe(sectionBienvenidaRef.current);
        }

        return () => {
            if (sectionBienvenidaRef.current) {
                observerBienvenida.unobserve(sectionBienvenidaRef.current);
            }
        };

    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (homeRef.current) {
                if (window.scrollY > 80) {
                    homeRef.current.classList.add('shrink');
                } else {
                    homeRef.current.classList.remove('shrink');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header>
            <nav id="Home" ref={homeRef}>
                <NavLink to="/" className="logo">RUKA DIAK</NavLink>
                <ul>
                    <li><NavLink to="/About"><i className="fa-solid fa-heart" style={{ color: '#ffffff' }}></i>  Sobre</NavLink></li>
                    <li>
                        <NavLink to="#"><i className="fa-solid fa-images" style={{ color: '#ffffff' }}></i>   {dropdownTitle}</NavLink>
                        <ul className="dropdown">
                        {dropdownOptions.map((option, index) => (
                                <li key={index}>
                                    <NavLink to={option.url}>{option.name}</NavLink>
                                </li>
                            ))}

                        </ul>
                    </li>
                    <li><NavLink to="/FAQ"><i className="fa-solid fa-circle-question" style={{ color: '#ffffff' }}></i>  FaQ</NavLink></li>
                    <li><NavLink to="/Contact"><i className="fa-solid fa-envelope" style={{ color: '#ffffff' }}></i>  Contacto</NavLink></li>
                    <li><NavLink to="#" className="register"><i className="fa-solid fa-user" style={{ color: '#ffffff' }}></i>  Registrar</NavLink></li>
                </ul>
            </nav>
            <section className="bienvenida" ref={sectionBienvenidaRef}>
                <h1>Cabañas Ruka Diak</h1>
                <p>Veni a disfrutar la temporada!</p>
                <NavLink to="#">¡Conocenos!</NavLink>
            </section>
        </header>
    );
};

HeaderRoute.propTypes = {
    dropdownTitle: PropTypes.string.isRequired,
    dropdownOptions: PropTypes.arrayOf (
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ),

};

export default HeaderRoute;