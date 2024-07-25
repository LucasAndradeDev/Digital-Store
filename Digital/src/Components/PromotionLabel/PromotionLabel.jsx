import React from 'react';
import './PromotionLabel.css';

function PromotionLabel({
  text = '30% OFF',
  backgroundColor = '#e7ff86',
  color = '#474747',
  fontWeight = 'bold',
  fontSize = '0.7rem',
  position = 'absolute',
  top = '1rem',
  left = '1rem',
  padding = '0.2rem 0.1rem',
  borderBottomRightRadius = '5px',
  borderRadius = '1.2rem',
  width = '4.2rem',
  height,
  zIndex = '10',
  lineHeight = 'normal',
  fontFamily = "Inter, sans-serif",
  ...rest
}) {
  const labelStyle = {
    backgroundColor,
    color,
    fontWeight,
    fontSize,
    position,
    top,
    left,
    padding,
    borderBottomRightRadius,
    borderRadius,
    width,
    height,
    zIndex,
    lineHeight,
    fontFamily,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div className="PromotionLabel" style={labelStyle} {...rest}>
      <p>{text}</p>
    </div>
  );
}

export default PromotionLabel;
