import React from 'react';
import './CardMeta.css'; // Certifique-se de importar o CSS corretamente

function CardMeta() {
  return (
    <div className="CardMeta">
      <p className="CardMeta-Product">Tênis</p>
      <h3 className="CardMeta-nameProduct">K-Swiss V8 - Masculino</h3>
      <p className="CardMeta-Price"><s>R$200</s> <strong>R$100</strong></p>
    </div>
  );
}

export default CardMeta;
