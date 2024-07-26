import React, { useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import LoginPopupModal from "../LoginPopupModal/LoginPopupModal";
import "./Header.css";

function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <header className="page-header">
      <div className="header-top">
        <div className="header-inputlogo">
          <Logo />
          <SearchInput />
        </div>

        <div className="header-actions">
          <div className="header-btns">
            <Button
              text="Cadastre-se"
              backgroundColor="#ffffff"
              color="black"
              width="10rem"
              height="2.5rem"
              borderRadius="0.5rem"
              fontSize="1rem"
              hoverColor="#f0f0f0"
              hoverFontColor="black"
              fontWeight="600"
              hoverFontSize="1.2rem"
              outline="none"
              underline={true}
              underlineWidth="55%"
              underlineHeight="1px"
              underlineOffset="10px"
              underlinePosition="bottom"
              onClick={handleOpenModal}
            />
            <Button
              text="Entrar"
              backgroundColor="#c92071"
              color="#ffffff"
              width="8rem"
              height="2.5rem"
              borderRadius="0.5rem"
              fontSize="1rem"
              hoverColor="#a1004e"
              hoverFontColor="#ffffff"
              fontWeight="600"
              onClick={handleOpenModal}
            />
          </div>

          <ShoppingCart />
        </div>
      </div>
      <LoginPopupModal showModal={showModal} closeModal={handleCloseModal} />
    </header>
  );
}

export default Header;
