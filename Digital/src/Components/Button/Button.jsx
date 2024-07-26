import React from 'react';
import "./Button.css";

function Button({
  text = 'Button',
  backgroundColor = '#c92071',
  color = '#ffffff',
  width = '10rem',
  height = '2rem',
  borderRadius = '0.5rem',
  border = 'none',
  fontSize = '1rem',
  hoverColor = '#a1004e',
  hoverFontColor = '#ffffff',
  fontWeight = '400',
  hoverFontSize = '1rem',
  outline = 'none',
  underline = false,
  underlineWidth = '100%',
  underlineHeight = '2px',
  underlineOffset = '2px',
  underlinePosition = 'bottom',
  position = 'relative',
  top,
  left,
  right,
  bottom,
  zIndex,
  onClick,
  ...rest
}) {
  const buttonStyle = {
    backgroundColor,
    color,
    width,
    height,
    borderRadius,
    border,
    fontSize,
    fontWeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'background-color 0.3s, color 0.3s, font-size 0.3s',
    outline,
    position,
    top,
    left,
    right,
    bottom,
    zIndex,
    '--underline-width': underlineWidth,
    '--underline-height': underlineHeight,
    '--underline-offset': underlineOffset,
    '--underline-position': underlinePosition,
  };

  return (
    <a
      className={`custom-button ${underline ? 'underline' : ''}`}
      style={buttonStyle}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = hoverColor;
        e.currentTarget.style.color = hoverFontColor;
        e.currentTarget.style.fontSize = hoverFontSize;
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = backgroundColor;
        e.currentTarget.style.color = color;
        e.currentTarget.style.fontSize = fontSize;
      }}
      onClick={onClick}
      {...rest}
    >
      {text}
    </a>
  );
}

export default Button;
