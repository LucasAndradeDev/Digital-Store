import React from "react";
import Carousel from "../../Components/CarouselViewPage/CarouselViewPage";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./ProductViewPage.css";
import Button from "../../Components/Button/Button";

const ProductViewPage = () => (
  <div className="ProductViewPage">
    <nav className="breadcrumb">
      <a href="#">Home</a> / <a href="#">Produtos</a> / <a href="#">Tênis</a> /{" "}
      <a href="#">Nike</a> / Tênis Nike Revolution 6 Next Nature Masculino
    </nav>

    <main className="main-content">
      <div className="carousel-section">
        <Carousel />
      </div>
      <div className="infos">
        <div className="product-header">
          <h3 >Tênis Nike Revolution 6 Next Nature Masculino</h3>
          <span className="infos-desc">Casual | Nike | REF: 38416711</span>
          <div className="rating">
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
          </div>
          <div className="product-price">
            <span className="current-price">
              R$ <span>219</span>,00
            </span>
            <span className="original-price">R$ 299,00</span>
          </div>
        </div>
        <div className="product-info">
          <h2>Descrição do produto</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>
          <div className="product-sizes">
            <p>Tamanho</p>
            <div className="product-btns">
              <Button
                text="39"
                width="2.5rem"
                height="2.6rem"
                border="solid 1px #D8D8D8"
                borderRadius="0.2rem"
                backgroundColor="#ffffff"
                fontWeight="600"
                fontSize="0.95rem"
                color="#000"
                hoverColor="#c92071"
                hoverFontColor="#ffffff"
                hoverFontSize="1rem"
              />
              <Button
                text="40"
                width="2.5rem"
                height="2.6rem"
                border="solid 1px #D8D8D8"
                borderRadius="0.2rem"
                backgroundColor="#ffffff"
                fontWeight="600"
                fontSize="0.95rem"
                color="#000"
                hoverColor="#c92071"
                hoverFontColor="#ffffff"
                hoverFontSize="1rem"
              />
              <Button
                text="41"
                width="2.5rem"
                height="2.6rem"
                border="solid 1px #D8D8D8"
                borderRadius="0.2rem"
                backgroundColor="#ffffff"
                fontWeight="600"
                fontSize="0.95rem"
                color="#000"
                hoverColor="#c92071"
                hoverFontColor="#ffffff"
                hoverFontSize="1rem"
              />
              <Button
                text="42"
                width="2.5rem"
                height="2.6rem"
                border="solid 1px #D8D8D8"
                borderRadius="0.2rem"
                backgroundColor="#ffffff"
                fontWeight="600"
                fontSize="0.95rem"
                color="#000"
                hoverColor="#c92071"
                hoverFontColor="#ffffff"
                hoverFontSize="1rem"
              />
              <Button
                text="43"
                width="2.5rem"
                height="2.6rem"
                border="solid 1px #D8D8D8"
                borderRadius="0.2rem"
                backgroundColor="#ffffff"
                fontWeight="600"
                fontSize="0.95rem"
                color="#000"
                hoverColor="#c92071"
                hoverFontColor="#ffffff"
                hoverFontSize="1rem"
              />
            </div>
          </div>
          <div className="product-colors">
            <p>Cores</p>
            <div>
              <div className="product-color" style={{background: "#6eeeff"}}></div>
              <div className="product-color" style={{background: "#ff6969"}}></div>
              <div className="product-color" style={{background: "#5d5d5d"}}></div>
              <div className="product-color" style={{background: "#6d70b7"}}></div>

            </div>
          </div>
          <div className="btn-cmp">
            <Button
              text="COMPRAR"
              backgroundColor="#ffb31f"
              color="#ffffff"
              width="12.5rem"
              height="2.8rem"
              borderRadius="0.5rem"
              fontSize="1rem"
              hoverColor="#ffb31f"
              hoverFontColor="#ffffff"
              fontWeight="600"
              hoverFontSize="1.2rem"
              outline="none"
            />
          </div>
        </div>
      </div>
    </main>
    <section className="related-products">
      <div className="VPText">
        <h3>Produtos em alta</h3>
        <p>
          Ver todos <i className="fa-solid fa-arrow-right"></i>
        </p>
      </div>
      <div className="VPCards">
        {Array.from({ length: 4 }).map((_, index) => (
          <ProductCard
            key={index}
            width={250}
            height={270}
            showPromotionLabel={index < 2}
          />
        ))}
      </div>
    </section>
  </div>
);

export default ProductViewPage;
