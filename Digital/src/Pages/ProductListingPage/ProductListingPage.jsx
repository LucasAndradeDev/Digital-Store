import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import "./ProductListingPage.css";
import Filter from "../../Components/Filter/Filter"
import SplitDropdown from '../../Components/SplitDropdown/SplitDropdown';

const ProductListingPage = () => {
  return (
    <>
    <div className='listingPage'>
      <span>
        <p><strong>Resultados para "Tênis" - </strong> 389 Produtos</p> 
        <SplitDropdown/>
        </span>
        <div className='mainLP'>
          <div className='filtro'>
            <Filter />
          </div>
          <div
            className='listing-page-card-content'
            style={{
              width: '850px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              alignItems: 'center',
              justifyContent: 'flex-end',
              position: 'relative',
              paddingBottom: '14rem' // Corrigido para camelCase
            }}
          >
            {Array.from({ length: 15 }).map((_, index) => (
        <ProductCard key={index} width={250} height={270} showPromotionLabel={index < 2} />
      ))}
          </div>
        </div>
    </div>
    </>
  );
}

export default ProductListingPage;
