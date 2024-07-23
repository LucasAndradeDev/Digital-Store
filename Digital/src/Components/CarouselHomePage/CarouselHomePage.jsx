import React from "react";
import "./CarouselHomePage.css";
import RectangleGrey from "../../assets/RectangleGrey.svg";
import RectangleBlue from "../../assets/RectangleBlue.svg";
import RectanglePink from "../../assets/RectanglePink.svg";
import RectangleBlack from "../../assets/RectangleBlack.svg";

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
          <img className="d-block w-80" src={RectangleGrey} alt="First slide" />
          <div className="carousel-caption">
            <h5>First Slide</h5>
            <p>This is the description for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-80" src={RectangleBlue} alt="Second slide" />
          <div className="carousel-caption">
            <h5>Second Slide</h5>
            <p>This is the description for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-80" src={RectangleBlack} alt="Third slide" />
          <div className="carousel-caption">
            <h5>Third Slide</h5>
            <p>This is the description for the third slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-80" src={RectanglePink} alt="Fourth slide" />
          <div className="carousel-caption">
            <h5>Fourth Slide</h5>
            <p>This is the description for the fourth slide.</p>
          </div>
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
