import React from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import StaticOffer from "../../Components/Static-offer/Static-offer";
import FeaturedCollectionsSession from "../../Components/FeaturedCollectionsSession/FeaturedCollectionsSession";
import PromotionBanner from "../../Components/PromotionBanner/PromotionBanner";
import CarouselHomePage from "../../Components/CarouselHomePage/CarouselHomePage";
import "./HomePage.css"; 

function HomePage() {
  return (
    <div>
      <CarouselHomePage />
      <PromotionBanner />
      <FeaturedCollectionsSession />
      <div className="totalCard">
        <div className="cardTitle">
          <h3>Produtos em alta</h3>
          <p>
            Ver todos <i className="fa-solid fa-arrow-right"></i>
          </p>
        </div>

        <div className="HomePage-CardContent">
        {Array.from({ length: 8 }).map((_, index) => (
        <ProductCard key={index} width={250} height={270} showPromotionLabel={index < 2} />
      ))}
        </div>
      </div>

      <StaticOffer />
    </div>
  );
}

export default HomePage;
