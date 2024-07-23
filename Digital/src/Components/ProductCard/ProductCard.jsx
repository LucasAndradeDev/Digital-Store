import React from 'react';
import { Card } from 'antd';
import PromotionLabel from '../PromotionLabel/PromotionLabel';
import './ProductCard.css';
import cardTenis from "../../assets/cardTenis.svg";
import CardMeta from "../CardMeta/CardMeta"; 

const ProductCard = ({ width = 260, height = 'auto' }) => (
  
  
  
    <div className="product-card-container" style={{ width }}>
    
      <Card
        hoverable
        className="product-card"
        style={{ height }}
        cover={<img alt="Tênis adidas Grand Court 2.0" src={cardTenis} className='cardTenis' />}
      >
        <div className="ProductCardPromotionLabel">
          <PromotionLabel />
        </div>
      </Card>
      <CardMeta />
    </div>
 
);

export default ProductCard;
