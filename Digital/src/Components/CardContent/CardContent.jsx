import React from 'react';
import './CardContent.css'; // Arquivo CSS com a classe .cardContent

const CardContent = ({ children }) => {
  return (
    <div className="cardContent">
      {children}
    </div>
  );
};

export default CardContent;
