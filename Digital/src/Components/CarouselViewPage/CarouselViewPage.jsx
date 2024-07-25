import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselViewPage.css';
import tenisViewPage from '../../assets/tenisViewPage.svg';
import AmareloVP from '../../assets/ViewPageAmarelo.svg';
import CinzaVP from '../../assets/ViewPageCinza.svg';
import LilasVP from '../../assets/ViewPageLilas.svg';
import RosaVP from '../../assets/ViewPageRosa.svg';
import MarromVP from '../../assets/ViewPageMarrom.svg';

const images = [
  AmareloVP,
  CinzaVP,
  LilasVP,
  RosaVP,
  MarromVP
];

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel 
        showArrows={true} 
        showStatus={false} 
        showThumbs={true} 
        thumbWidth={80} 
        infiniteLoop={true}
        emulateTouch={true} 
        swipeable={true} 
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Slide ${index}`} className="background-image" />
            <img src={tenisViewPage} alt="Tenis" className="foreground-image" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
