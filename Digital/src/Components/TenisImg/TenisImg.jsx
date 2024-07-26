import React from 'react';
import PropTypes from 'prop-types';
import './TenisImg.css'; // Inclua o CSS para o componente aqui

const TenisImg = ({ src, height, angle, top, left, alt }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className="foreground-image" 
      style={{ 
        height: height || '10%', 
        transform: `translate(-50%, -50%) rotate(${angle || '0'}deg)`,
        top: top || '50%',
        left: left || '50%',
        position: 'absolute' 
      }} 
    />
  );
};

TenisImg.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.string,
  angle: PropTypes.string, 
  top: PropTypes.string,  
  left: PropTypes.string,  
  alt: PropTypes.string,
};

export default TenisImg;
