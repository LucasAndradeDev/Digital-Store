import React from "react";
import "./LoginPopupModal.css";
import Button from "../Button/Button";

function LoginPopupModal({ showModal, closeModal }) {
  return (
    <div className={`modal fade ${showModal ? "show" : ""}`} style={{ display: showModal ? "block" : "none" }} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <button type="button" className="close" onClick={closeModal} aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-title text-center">
              <h4>Login</h4>
            </div>
            <div className="d-flex flex-column text-center">
              <form>
                <div className="form-group">
                  <input type="email" className="form-control" id="email1" placeholder="Seu email..." />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="password1" placeholder="Sua senha..." />
                </div>
                <Button
                  text="Entrar"
                  backgroundColor="#c92071"
                  color="#ffffff"
                  width="14rem"
                  height="2.5rem"
                  borderRadius="0.5rem"
                  fontSize="1rem"
                  hoverColor="#a1004e"
                  hoverFontColor="#ffffff"
                  fontWeight="600"
                  position="relative"
                  left="5rem"
                  top="-0.3rem"
                />
              </form>
              <div className="text-center text-muted delimiter">ou use sua conta da rede social</div>
              <div className="d-flex justify-content-center social-buttons">
                <Button
                  text={<i className="fab fa-twitter"></i>}
                  backgroundColor="#1da1f2"
                  color="#ffffff"
                  width="3rem"
                  height="2.5rem"
                  borderRadius="0.5rem"
                  fontSize="1rem"
                  hoverColor="#0d8ddb"
                  hoverFontColor="#ffffff"
                  fontWeight="600"
                />
                <Button
                  text={<i className="fab fa-facebook"></i>}
                  backgroundColor="#1877f2"
                  color="#ffffff"
                  width="3rem"
                  height="2.5rem"
                  borderRadius="0.5rem"
                  fontSize="1rem"
                  hoverColor="#155dcb"
                  hoverFontColor="#ffffff"
                  fontWeight="600"
                />
                <Button
                  text={<i className="fab fa-linkedin"></i>}
                  backgroundColor="#0a66c2"
                  color="#ffffff"
                  width="3rem"
                  height="2.5rem"
                  borderRadius="0.5rem"
                  fontSize="1rem"
                  hoverColor="#084a8e"
                  hoverFontColor="#ffffff"
                  fontWeight="600"
                />
              </div>
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <div className="signup-section">Ainda não tem cadastro? <a href="#a" className="text-info" style={{color: "#c92071"}}> Cadaste-se aqui!</a>.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPopupModal;
