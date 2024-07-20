import React from 'react';
import { Card } from 'antd';
import PromotionLabel from '../PromotionLabel/PromotionLabel';
import './ProductCard.css'; // Importa o CSS específico para o card

const { Meta } = Card;

const ProductCard = () => (
  <div style={{ position: 'relative', width: 240 }}>
    <Card
      hoverable
      cover={<img alt="Tênis adidas Grand Court 2.0" src="https://imgcentauro-a.akamaihd.net/1366x1366/97360651.jpg" />}
    >
      <div className="ProductCardPromotionLabel">
        <PromotionLabel />
      </div>
      <Meta
        title="Tênis adidas Grand Court 2.0 - Feminino"
        description={<span><s>R$ 349,99</s> R$ 279,99</span>}
      />
    </Card>
  </div>
);

export default ProductCard;
