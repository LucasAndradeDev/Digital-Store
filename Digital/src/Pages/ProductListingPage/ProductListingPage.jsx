import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';

const ProductListingPage = () => {
  return (

    
    <div
      className='ListingPage-CardContent'
      style={{
        width: '850px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'relative',
        left: '10rem'
      }}
    >
      <ProductCard width={250} height={270} />
      <ProductCard width={250} height={270} />
      <ProductCard width={250} height={270} />
      <ProductCard width={250} height={270} />
      <ProductCard width={250} height={270} />
      <ProductCard width={250} height={270} />
      <ProductCard width={250} height={270} />
      <ProductCard width={250} height={270} />
      <ProductCard width={250} height={270} />
      <ProductCard width={250} height={270} />
      <ProductCard width={250} height={270} />
      <ProductCard width={250} height={270} />
      <ProductCard width={250} height={270} />
      <ProductCard width={250} height={270} />
      <ProductCard width={250} height={270} />
    
    </div>
  );
};

export default ProductListingPage;
