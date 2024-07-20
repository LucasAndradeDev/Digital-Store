// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navigation() {
//   return (
//     <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/lista-de-produtos">Lista de Produtos</Link></li>
//       <li><Link to="/produto">Produto</Link></li>
//     </ul>
//   );
// }

// export default Navigation;

import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lista-de-produtos">Lista de Produtos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/produto">Produto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
