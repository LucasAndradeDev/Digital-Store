import React from 'react';
import './CardMeta.css'; 

function CardMeta() {
  return (
    <div className="CardMeta">
      <p className="CardMeta-Product">Tênis</p>
      <h3 className="CardMeta-nameProduct">K-Swiss V8 - Masculino</h3>
      <p className="CardMeta-Price"><s>200R$</s> <strong>160R$</strong></p>
    </div>
  );
}

export default CardMeta;
