import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';

const ProductListingPage = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
     
      {/* Adicione mais ProductCard conforme necessário */}
    </div>
  );
};

export default ProductListingPage;
