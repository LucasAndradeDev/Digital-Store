import React from 'react';
import "./SplitDropdown.css";

function SplitDropdown() {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-default">Ordenar por : </button>
      <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
        <span className="caret"></span>
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <ul className="dropdown-menu" role="menu">
        <li><a href="#">Mais vendidos</a></li>
        <li><a href="#">Mais baratos</a></li>
        <li><a href="#">Mais relevantes</a></li>
      </ul>
    </div>
  );
}

export default SplitDropdown;
