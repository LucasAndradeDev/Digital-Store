import React from 'react';
import './CardContent.css'; 

const CardContent = ({ children }) => {
  return (
    <div className="cardContent">
      {children}
    </div>
  );
};

export default CardContent;
