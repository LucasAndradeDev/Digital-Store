// PromotionBanner.js
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
          <span className="promotion-label-wrapper">
            <PromotionLabel className="promotion-label" />
          </span>
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
          <span className="promotion-label-wrapper">
            <PromotionLabel className="promotion-label" />
          </span>
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
          <span className="promotion-label-wrapper">
            <PromotionLabel className="promotion-label" />
          </span>
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
