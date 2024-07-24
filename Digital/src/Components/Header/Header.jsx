import React from 'react';
import SearchInput from "../SearchInput/SearchInput";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import "./Header.css";

function Header() {
    return (
        <header className='page-header'>
            <div className='header-top'>
                <div className='header-inputlogo'>
                    <Logo />
                    <SearchInput />
                </div>
                
                <div className='header-actions'>
                    <button className="first-button">Cadastre-se</button>
                    <Button text={"Entrar"}/>
                    <ShoppingCart />
                </div>
            </div>
        </header>
    );
}

export default Header;
