import React from 'react';
import shoppingCartIcon from "../../assets/shoppingcart.png";
import "./ShoppingCart.css";

function ShoppingCart() {
    const comprasNoCarrinho = 2;
    return (
        <div className="shoppingCart">
            <img src={shoppingCartIcon} alt="Shopping Cart" className="shoppingCartIcon" />
            <span className="cartCount">{comprasNoCarrinho}</span>
        </div>
    );
}

export default ShoppingCart;
