// PromotionBanner.js
import React from "react";
import "./PromotionBanner.css";
import PromotionLabel from "../PromotionLabel/PromotionLabel";
import supreme from "../../assets/camisaSupreme.svg";

function PromotionBanner() {
    return (
        <div className="BannerGroup">
            <div className="Banner">
                <span className="promotion-label-wrapper">
                    <PromotionLabel className="promotion-label" />
                </span>
                <h3>Novo Drop Supreme</h3>
                <button className="btn-shopping btn-supreme">Comprar</button>
                <img src={supreme} alt="Camisa Supreme" />
            </div>
            <div className="Banner">
                <span className="promotion-label-wrapper">
                    <PromotionLabel className="promotion-label" />
                </span>
                <h3>Coleção Adidas</h3>
                <button className="btn-shopping">Comprar</button>
                <img src={supreme} alt="Camisa Supreme" />
            </div>
            <div className="Banner">
                <span className="promotion-label-wrapper">
                    <PromotionLabel className="promotion-label" />
                </span>
                <h3>Novo Beats Bass</h3>
                <button className="btn-shopping">Comprar</button>
                <img src={supreme} alt="Camisa Supreme" />
            </div>
        </div>
    );
}

export default PromotionBanner;
