import React from 'react';
import './Footer.css'; // Importa o CSS corretamente
import logo from '../../assets/logo.svg'; // Importa o SVG corretamente

function Footer() {
    return (
        <section className="footer">
            <div className="footer-row">
                <div className="footer-col">
                    <img src={logo} alt="Logo" /> {/* Usar a variável logo */}
                    <div className='footer-text'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sed minima magnam exercitationem et illum sint assumenda laudantium libero magni?</p>
                    </div>
                    <div className="icons">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
                <div className="footer-col">
                    <h4>Informação</h4>
                    <ul className="links">
                        <li><a href="#">Sobre Drip Store</a></li>
                        <li><a href="#">Segurança</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Trabalhe conosco</a></li>
                        <li><a href="#">Meus Pedidos</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Categorias</h4>
                    <ul className="links">
                        <li><a href="#">Camisetas</a></li>
                        <li><a href="#">Calças</a></li>
                        <li><a href="#">Bones</a></li>
                        <li><a href="#">Headphones</a></li>
                        <li><a href="#">Tenis</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Contato</h4>
                    <ul className="links">
                        <li><a href="#">Av.Santos Dumont, 1510-1
                            andar -Aldeota,Fortaleza - CE,60150-161</a></li>
                            <p>(85) 3051-3411</p>
                    </ul>
                </div>
            </div>

            <div className='footer-copyright'>
                <p>@2024 Digital College</p>
            </div>
        </section>
    );
}

export default Footer;
