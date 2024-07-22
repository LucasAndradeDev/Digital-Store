import React from 'react';
import './SearchInput.css';

function SearchInput() {
    return (
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="Perquisar produto..."
            />
            {/* <button className="search-button">
                <i className="fa fa-search"></i>
            </button> */}
        </div>
    );
}

export default SearchInput;
