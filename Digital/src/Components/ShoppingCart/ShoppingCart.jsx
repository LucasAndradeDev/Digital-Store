import React, { useState } from 'react';
import shoppingCartIcon from "../../assets/shoppingcart.png";
import "./ShoppingCart.css";

function ShoppingCart() {
    const [cartCount, setCartCount] = useState(0);

    const handleCartClick = () => {
        setCartCount(cartCount + 1);
    };

    const countClass = cartCount < 10 ? 'count-small' : 'count-large';

    return (
        <div className="shoppingCart" onClick={handleCartClick}>
            <img src={shoppingCartIcon} alt="Shopping Cart" className="shoppingCartIcon" />
            <span className={`cartCount ${countClass}`}>{cartCount}</span>
        </div>
    );
}

export default ShoppingCart;
