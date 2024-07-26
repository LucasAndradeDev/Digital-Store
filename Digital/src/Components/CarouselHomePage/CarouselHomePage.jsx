import React from "react";
import "./CarouselHomePage.css";
import RectangleGrey from "../../assets/RectangleGrey.svg";
import RectangleBlue from "../../assets/RectangleBlue.svg";
import RectanglePink from "../../assets/RectanglePink.svg";
import RectangleBlack from "../../assets/RectangleBlack.svg";
import tenisViewPage from '../../assets/tenisViewPage.svg';
import TenisImg from '../TenisImg/TenisImg'; 
import Button from "../Button/Button";

function CarouselHomePage() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" style={{border: "45%" , width: "10px" , height: "10px"}}></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" style={{border: "45%" , width: "10px" , height: "10px"}}></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" style={{border: "45%" , width: "10px" , height: "10px"}}></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" style={{border: "45%" , width: "10px" , height: "10px"}}></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-60" src={RectangleGrey} alt="First slide" />
          <div className="carousel-caption">
            <p className="titulo-carousel">Melhores ofertas personalizadas</p>
            <h3 style={{color:"black"}}>Queima de <br />estoque Nike🔥</h3>
            <p className="desc-carousel" style={{color:"black"}}>Consequat culpa exercitation mollit nisi excepteur do <br /> do tempor laboris eiusmod irure consectetur.</p>
          </div>
          <TenisImg
            src={tenisViewPage}
            height="48%"
            angle="-20"
            top="45%"
            left="55rem"
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
            top="28rem"
            left="6.3rem"
            zIndex="1"
            hoverColor="#ffffff"
            hoverFontColor="#c92071"
            hoverFontSize="1rem"
          />

        </div>
        <div className="carousel-item">
          <img className="d-block w-60" src={RectangleBlue} alt="Second slide" />
          <div className="carousel-caption">
            <p className="titulo-carousel">Melhores ofertas personalizadas</p>
            <h3>Queima de <br />estoque Nike🔥</h3>
            <p className="desc-carousel">Consequat culpa exercitation mollit nisi excepteur do <br /> do tempor laboris eiusmod irure consectetur.</p>
          </div>
          <TenisImg
            src={tenisViewPage}
            height="48%"
            angle="-20"
            top="45%"
            left="55rem"
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
            top="28rem"
            left="6rem"
            zIndex="1"
            hoverColor="#ffffff"
            hoverFontColor="#c92071"
            hoverFontSize="1rem"
          />
        </div>
        <div className="carousel-item">
          <img className="d-block w-60" src={RectangleBlack} alt="Third slide" />
          <div className="carousel-caption">
            <p className="titulo-carousel">Melhores ofertas personalizadas</p>
            <h3>Queima de <br />estoque Nike🔥</h3>
            <p className="desc-carousel">Consequat culpa exercitation mollit nisi excepteur do <br /> do tempor laboris eiusmod irure consectetur.</p>
          </div>
          <TenisImg
            src={tenisViewPage}
            height="48%"
            angle="-20"
            top="45%"
            left="55rem"
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
            top="28rem"
            left="6rem"
            zIndex="1"
            hoverColor="#ffffff"
            hoverFontColor="#c92071"
            hoverFontSize="1rem"
          />
        </div>
        <div className="carousel-item">
          <img className="d-block w-60" src={RectanglePink} alt="Fourth slide" />
          <div className="carousel-caption">
            <p className="titulo-carousel">Melhores ofertas personalizadas</p>
            <h3>Queima de <br />estoque Nike🔥</h3>
            <p className="desc-carousel">Consequat culpa exercitation mollit nisi excepteur do <br /> do tempor laboris eiusmod irure consectetur.</p>
          </div>
          <TenisImg
            src={tenisViewPage}
            height="48%"
            angle="-20"
            top="45%"
            left="55rem"
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
            top="28rem"
            left="6rem"
            zIndex="1"
            hoverColor="#ffffff"
            hoverFontColor="#c92071"
            hoverFontSize="1rem"
          />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" style={{width:0}}></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" style={{width:0}}></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

export default CarouselHomePage;