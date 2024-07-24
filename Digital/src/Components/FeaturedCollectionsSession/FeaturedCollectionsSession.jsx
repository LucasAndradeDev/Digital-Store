import React, { useEffect } from 'react';
import camiseta from "../../assets/camiseta.svg";
import calca from "../../assets/pants.svg";
import bone from "../../assets/hat.svg";
import headphone from "../../assets/headphones.svg";
import tenis from "../../assets/sneakers.svg";
import "./FeaturedCollectionsSession.css";

function FeaturedCollectionsSession() {
    useEffect(() => {
        const objects = document.querySelectorAll('.Session object');

        objects.forEach(object => {
            object.addEventListener('load', () => {
                const svgDoc = object.contentDocument;
                if (svgDoc) {
                    const paths = svgDoc.querySelectorAll('path');

                    // Define a cor inicial para o boné
                    paths.forEach(path => path.setAttribute('fill', '#8f8f8f'));

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
            <div className='session-text'><h3>Coleções em destaque</h3></div>
            <div className='itens'>
                <div className="item">
                    <object type="image/svg+xml" data={camiseta} className='camiseta'>Camiseta</object>
                    <h6 style={{ position: 'relative', top: '1rem' }}>Camiseta</h6>
                </div>
                <div className="item">
                    <object type="image/svg+xml" data={calca} style={{ width: '4rem' }}>Calça</object>
                    <h6 style={{ position: 'relative', top: '1rem' }}>Calça</h6>
                </div>
                <div className="item">
                    <object type="image/svg+xml" data={bone} className='bone'>Boné</object>
                    <h6 style={{ position: 'relative', top: '0rem'}}>Boné</h6>
                </div>
                <div className="item">
                    <object type="image/svg+xml" data={headphone} style={{ width: '4rem' }}>Headphone</object>
                    <h6 style={{ position: 'relative', top: '1rem' }}>Headphone</h6>
                </div>
                <div className="item">
                    <object type="image/svg+xml" data={tenis} style={{ width: '4rem', fill: '#099000' }}>Tênis</object>
                    <h6 style={{ position: 'relative', top: '1rem' }}>Tênis</h6>
                </div>
            </div>
        </div>
    );
}

export default FeaturedCollectionsSession;
