import React from 'react';
import camiseta from "../../assets/camiseta.svg";
import calca from "../../assets/calça.svg";
import bone from "../../assets/hat.svg";
import headphone from "../../assets/headphone.svg";
import tenis from "../../assets/tenis.svg";
import "./FeaturedCollectionsSession.css";

function FeaturedCollectionsSession() {
    return (
        <div className="Session">
            <div className="camiseta">
                <img src={camiseta} alt="Camiseta" className='camiseta'/>
                <h6 style={{ position: 'relative', bottom: '0.5rem' }}>Camiseta</h6>
            </div>
            <div className="calca">
                <img src={calca} alt="Calça"/>
                <h6 style={{ position: 'relative', top: '0.3rem' }}>Calça</h6>
            </div>
            <div className="bone">
                <img src={bone} alt="Boné" className='bone'/>
                <h6 style={{ position: 'relative', top: '0.6rem' }}>Boné</h6>
            </div>
            <div className="headphone">
                <img src={headphone} alt="Headphone" />
                <h6 style={{ position: 'relative', top: '0.3rem' }}>Headphone</h6>
            </div>
            <div className="tenis">
                <img src={tenis} alt="Tênis" />
                <h6 style={{ position: 'relative', top: '0.3rem' }}>Tênis</h6>
            </div>
        </div>
    );
}

export default FeaturedCollectionsSession;
