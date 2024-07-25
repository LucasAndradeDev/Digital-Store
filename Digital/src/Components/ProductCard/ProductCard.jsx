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
        <PromotionLabel
            text="30% OFF"
            backgroundColor="#e7ff86"
            color="#474747"
            fontWeight="700"
            fontSize="0.8rem"
            position="absolute"
            top="1rem"
            left="1rem"
            padding="0.2rem 0.1rem"
            borderBottomRightRadius="5px"
            borderRadius="1.2rem"
            width="5rem"
            height="1.7rem"
            zIndex="10"
          />
        </div>
      </Card>
      <CardMeta />
    </div>
 
);

export default ProductCard;
