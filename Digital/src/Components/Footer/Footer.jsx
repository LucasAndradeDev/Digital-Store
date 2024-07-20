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
                    <h4>Info</h4>
                    <ul className="links">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Compressions</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Collection</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Explore</h4>
                    <ul className="links">
                        <li><a href="#">Free Designs</a></li>
                        <li><a href="#">Latest Designs</a></li>
                        <li><a href="#">Themes</a></li>
                        <li><a href="#">Popular Designs</a></li>
                        <li><a href="#">Art Skills</a></li>
                        <li><a href="#">New Uploads</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Legal</h4>
                    <ul className="links">
                        <li><a href="#">Customer Agreement</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">GDPR</a></li>
                        <li><a href="#">Security</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Media Kit</a></li>
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
