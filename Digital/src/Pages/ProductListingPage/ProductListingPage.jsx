// import React from 'react';

// function ProductViewPage() {
//   return (
//     <div>
//       <h1>Lista de produtos</h1>
//     </div>
//   );
// }

// export default ProductViewPage;


import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import "./ProductListingPage.css";
import Filter from "../../Components/Filter/Filter"

// const ProductListingPage = () => {
//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
//       <ProductCard />
//       <ProductCard />
//       <ProductCard />
//       {/* Adicione mais ProductCard conforme necessário */}
//     </div>
//   );
// };

// export default ProductListingPage;


const ProductListingPage = () => {
    return (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', flexGrow: 1 }}>
                <Filter/>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                {/* Adicione mais ProductCard conforme necessário */}
            </div>
       
    );
};

export default ProductListingPage;
