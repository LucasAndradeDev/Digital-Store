import React, { useEffect } from 'react';
import camiseta from "../../assets/camiseta.svg";
import calca from "../../assets/calça.svg";
import bone from "../../assets/hat.svg";
import headphone from "../../assets/headphone.svg";
import tenis from "../../assets/tenis.svg";
import "./FeaturedCollectionsSession.css";

function FeaturedCollectionsSession() {
    useEffect(() => {
        const objects = document.querySelectorAll('.Session object');

        objects.forEach(object => {
            object.addEventListener('load', () => {
                const svgDoc = object.contentDocument;
                if (svgDoc) {
                    const paths = svgDoc.querySelectorAll('path');
                    
                    object.addEventListener('mouseover', () => {
                        paths.forEach(path => path.setAttribute('fill', '#c92071'));
                    });
                    
                    object.addEventListener('mouseout', () => {
                        paths.forEach(path => path.setAttribute('fill', '#8f8f8f'));
                    });
                }
            });
        });
    }, []);

    return (
        <div className="Session">
            <div className="item">
                <object type="image/svg+xml" data={camiseta} className='camiseta'>Camiseta</object>
                <h6 style={{ position: 'relative', top: '1.2rem' }}>Camiseta</h6>
            </div>
            <div className="item">
                <object type="image/svg+xml" data={calca} style={{ width: '5rem' }}>Calça</object>
                <h6 style={{ position: 'relative', top: '0.3rem' }}>Calça</h6>
            </div>
            <div className="item">
                <object type="image/svg+xml" data={bone} className='bone'>Boné</object>
                <h6 style={{ position: 'relative', top: '0.6rem' }}>Boné</h6>
            </div>
            <div className="item">
                <object type="image/svg+xml" data={headphone} style={{ width: '5rem' }}>Headphone</object>
                <h6 style={{ position: 'relative', top: '0.3rem' }}>Headphone</h6>
            </div>
            <div className="item">
                <object type="image/svg+xml" data={tenis} style={{ width: '5rem', fill: '#099000' }}>Tênis</object>
                <h6 style={{ position: 'relative', top: '0.3rem' }}>Tênis</h6>
            </div>
        </div>
    );
}

export default FeaturedCollectionsSession;
