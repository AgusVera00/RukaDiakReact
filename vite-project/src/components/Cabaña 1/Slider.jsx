import React, { useState, useEffect } from 'react';
import { imgSlider1 } from '../../data/data.js';
import SliderItem from './SliderItem.jsx';

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === imgSlider1.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [imgSlider1.length]);

    return (
        <section className="container-slider">
            <div className="galeria">
                <div className="slider">
                    <div 
                        className="sliderInner" 
                        style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease-in-out' }} 
                    >
                        {imgSlider1.map((image, index) => (
                            <SliderItem 
                                key={index} 
                                imgSlider={image.src}  
                                imgAlt={image.alt}    
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Slider;



