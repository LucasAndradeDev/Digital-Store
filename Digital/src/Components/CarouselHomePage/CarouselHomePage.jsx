import React from "react";
import "./CarouselHomePage.css";
import RectangleGrey from "../../assets/RectangleGrey.svg";
import RectangleBlue from "../../assets/RectangleBlue.svg";
import RectanglePink from "../../assets/RectanglePink.svg";
import RectangleBlack from "../../assets/RectangleBlack.svg";
import tenisViewPage from '../../assets/tenisViewPage.svg';
import TenisImg from '../TenisImg/TenisImg'; // Importa o novo componente
import Button from "../Button/Button";

function CarouselHomePage() {             
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-60" src={RectangleGrey} alt="First slide" />
          <div className="carousel-caption">
            <h5>First Slide</h5>
            <p>This is the description for the first slide.</p>
          </div>
          <TenisImg 
            src={tenisViewPage} 
            height="50%" 
            angle="-20" 
            top="18rem" 
            left="40rem" 
            alt="Tenis" 
          />
          <Button
            text="Ver Oferta"
            width="12rem"
            height="2.6rem"
            border="none"
            borderRadius="0.5rem"
            backgroundColor="#c92071"
            fontWeight="600"
            fontSize="0.95rem"
            color="rgb(255, 255, 255)"
            position="absolute"
            top="1rem"
            right="21.5rem"
            zIndex="1"
            hoverColor="#ffffff"
            hoverFontColor="#c92071"
            hoverFontSize="1rem"
          />
        </div>
        <div className="carousel-item">
          <img className="d-block w-60" src={RectangleBlue} alt="Second slide" />
          <div className="carousel-caption">
            <h5>Second Slide</h5>
            <p>This is the description for the second slide.</p>
          </div>
          <TenisImg 
            src={tenisViewPage} 
            height="50%" 
            angle="-20" 
            top="45%" 
            left="55%" 
            alt="Tenis" 
          />
        </div>
        <div className="carousel-item">
          <img className="d-block w-60" src={RectangleBlack} alt="Third slide" />
          <div className="carousel-caption">
            <h5>Third Slide</h5>
            <p>This is the description for the third slide.</p>
          </div>
          <TenisImg 
            src={tenisViewPage} 
            height="50%" 
            angle="-20" 
            top="45%" 
            left="55%" 
            alt="Tenis" 
          />
        </div>
        <div className="carousel-item">
          <img className="d-block w-60" src={RectanglePink} alt="Fourth slide" />
          <div className="carousel-caption">
            <h5>Fourth Slide</h5>
            <p>This is the description for the fourth slide.</p>
          </div>
          <TenisImg 
            src={tenisViewPage} 
            height="50%" 
            angle="-20" 
            top="45%" 
            left="55%" 
            alt="Tenis" 
          />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

export default CarouselHomePage;
