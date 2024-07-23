
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

const images = [
  'https://imgcentauro-a.akamaihd.net/1366x1366/97360651.jpg',
  'https://imgcentauro-a.akamaihd.net/1366x1366/97360651.jpg',
  'https://imgcentauro-a.akamaihd.net/1366x1366/97360651.jpg',
];

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel showArrows={true} showStatus={false} showThumbs={true} thumbWidth={80} infiniteLoop={true}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
