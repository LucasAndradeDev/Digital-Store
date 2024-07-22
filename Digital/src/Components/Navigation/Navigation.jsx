import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Certifique-se de importar o CSS

function Navigation() {
  return (
    <nav 
      className="navbar navbar-expand-lg bg-body-tertiary" 
      style={{ paddingTop: 0, paddingRight: 0, paddingLeft: 0, paddingBottom: 0 }}
    >
      <div className="container-fluid">
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lista-de-produtos">Lista de Produtos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/produto">Produto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/produto">Meus pedidos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
