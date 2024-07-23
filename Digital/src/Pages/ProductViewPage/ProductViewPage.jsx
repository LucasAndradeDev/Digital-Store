
// INICIO DO OUTRO CODIGO
import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import ProductCard from '../../Components/ProductCard/ProductCard';
import './ProductViewPage.css';

const App = () => (
  <div className="ProductViewPage">
    <header className="header">
      <nav className="breadcrumb">
        <a href="#">Home</a> / <a href="#">Produtos</a> / <a href="#">Tênis</a> / <a href="#">Nike</a> / Tênis Nike Revolution 6 Next Nature Masculino
      </nav>
      
    </header>
    <main className="main-content">
      <div className="carousel-section">
        <Carousel />
      </div>
      <div className='infos'>

      <div className="product-header">
        <h1>Tênis adidas Grand Court 2.0 - Feminino</h1>
        <div className="product-price">
          <span className="current-price">R$ 219,00</span>
          <span className="original-price">R$ 219,00</span>
        </div>
        <div className="product-rating">
          <span>★★★★☆</span> <span>(90 avaliações)</span>
        </div>
      </div>
      <div className="product-info">
        <h2>Descrição do produto</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
        <div className="product-sizes">
          <label>Tamanho:</label>
          <button>39</button>
          <button>40</button>
          <button>41</button>
          <button>42</button>
          <button>43</button>
        </div>
        <div className="product-colors">
          <label>Cor:</label>
          <button className="color-option" style={{ backgroundColor: '#f00' }}></button>
          <button className="color-option" style={{ backgroundColor: '#00f' }}></button>
          <button className="color-option" style={{ backgroundColor: '#0f0' }}></button>
          <button className="color-option" style={{ backgroundColor: '#ccc' }}></button>
        </div>
      </div>
        <button className="buy-button">Comprar</button>
      </div>
    </main>
    <section className="related-products">
      <h2>Produtos Relacionados</h2>
      <div className="product-list">
      <div className="product-item">
          <ProductCard/>
        </div>
        <div className="product-item">
          <ProductCard/>
        </div>
        <div className="product-item">
          <ProductCard/>
        </div>
        <div className="product-item">
          <ProductCard/>
        </div>
        <div className="product-item">
          <ProductCard/>
        </div>
      </div>
    </section>
  </div>
);

export default App;

// FIM DO OUTRO CODIGO


