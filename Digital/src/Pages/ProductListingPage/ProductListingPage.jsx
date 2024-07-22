import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';

const ProductListingPage = () => {
  return (
    <div className='totalCard'>
      <div className='cardContent'>
        <ProductCard width={250} height={270} />
        <ProductCard width={250} height={270} />
        <ProductCard width={250} height={270} />
        <ProductCard width={250} height={270} />
        <ProductCard width={250} height={270} />
        <ProductCard width={250} height={270} />
        <ProductCard width={250} height={270} />
        <ProductCard width={250} height={270} />
      </div>
    </div>
  );
};

export default ProductListingPage;
