import React from 'react';
import PropTypes from 'prop-types';

function SliderItem({ imgSlider, imgAlt }) {
  return (
    <>
      <img className="imagen" src={imgSlider} alt={imgAlt}/>
    </>
  );
}

SliderItem.propTypes = {
    imgSlider: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
};

export default SliderItem;
