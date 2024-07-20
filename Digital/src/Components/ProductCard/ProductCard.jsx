import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const ProductCard = () => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="Tênis adidas Grand Court 2.0" src="https://imgcentauro-a.akamaihd.net/1366x1366/97360651.jpg" />}
  >
    <Meta 
      title="Tênis adidas Grand Court 2.0 - Feminino" 
      description={
        <div>
          <p>www.digitalstore.com</p>
          <p style={{ fontWeight: 'bold' }}>R$ 279,99</p>
        </div>
      } 
    />
  </Card>
);

export default ProductCard;
