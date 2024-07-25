import React from "react";
import "./PromotionBanner.css";
import PromotionLabel from "../PromotionLabel/PromotionLabel";
import supreme from "../../assets/camisaSupreme.svg";
import headphoneBanner from "../../assets/headphoneBanner.svg";
import tenisBanner from "../../assets/tenisBanner.svg";
import Button from "../Button/Button";

function PromotionBanner() {
  return (
    <div className="BannerContent">
      <div className="BannerText">
        <h3>Coleções em destaque</h3>
      </div>
      <div className="BannerGroup">
        <div className="Banner">
          <PromotionLabel
            text="30% OFF"
            backgroundColor="#e7ff86"
            color="#474747"
            fontWeight="700"
            fontSize="0.8rem"
            position="absolute"
            top="2rem"
            left="1.95rem"
            padding="0.2rem 0.1rem"
            borderBottomRightRadius="5px"
            borderRadius="1.2rem"
            width="5rem"
            height="1.7rem"
            zIndex="10"
          />
          <h3>Novo Drop Supreme</h3>
          <Button
            text="Comprar"
            width="8rem"
            height="2.6rem"
            border="none"
            borderRadius="0.5rem"
            backgroundColor="rgb(255, 255, 255)"
            fontWeight="700"
            fontSize="0.95rem"
            color="#c92071"
            position="absolute"
            top="9.5rem"
            left="1.9rem"
            zIndex="1"
            hoverColor="#c92071"
            hoverFontColor="#ffffff"
            hoverFontSize="1rem"
          />
          <img src={supreme} alt="Camisa Supreme" />
        </div>
        <div className="Banner">
          <PromotionLabel
            text="30% OFF"
            backgroundColor="#e7ff86"
            color="#474747"
            fontWeight="700"
            fontSize="0.8rem"
            position="absolute"
            top="2rem"
            left="1.95rem"
            padding="0.2rem 0.1rem"
            borderBottomRightRadius="5px"
            borderRadius="1.2rem"
            width="5rem"
            height="1.7rem"
            zIndex="10"
          />
          <h3>Coleção Adidas</h3>
          <Button
            text="Comprar"
            width="8rem"
            height="2.6rem"
            border="none"
            borderRadius="0.5rem"
            backgroundColor="rgb(255, 255, 255)"
            fontWeight="700"
            fontSize="0.95rem"
            color="#c92071"
            position="absolute"
            top="9.5rem"
            left="1.9rem"
            zIndex="1"
            hoverColor="#c92071"
            hoverFontColor="#ffffff"
            hoverFontSize="1rem"
          />
          <img src={tenisBanner} alt="Camisa Adidas" />
        </div>
        <div className="Banner">
          <PromotionLabel
            text="30% OFF"
            backgroundColor="#e7ff86"
            color="#474747"
            fontWeight="700"
            fontSize="0.8rem"
            position="absolute"
            top="2rem"
            left="1.95rem"
            padding="0.2rem 0.1rem"
            borderBottomRightRadius="5px"
            borderRadius="1.2rem"
            width="5rem"
            height="1.7rem"
            zIndex="10"
          />
          <h3>Novo Beats Bass</h3>
          <Button
            text="Comprar"
            width="8rem"
            height="2.6rem"
            border="none"
            borderRadius="0.5rem"
            backgroundColor="rgb(255, 255, 255)"
            fontWeight="700"
            fontSize="0.95rem"
            color="#c92071"
            position="absolute"
            top="9.5rem"
            left="1.9rem"
            zIndex="1"
            hoverColor="#c92071"
            hoverFontColor="#ffffff"
            hoverFontSize="1rem"
          />
          <img src={headphoneBanner} alt="Beats Bass" />
        </div>
      </div>
    </div>
  );
}

export default PromotionBanner;
