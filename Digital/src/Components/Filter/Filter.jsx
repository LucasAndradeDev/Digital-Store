import React from "react";
import "./Filter.css"; // Importa o arquivo CSS para estilização

function Filter() {
    return (
        <div className="filter">
            <h5>Filtrar por</h5>
            <hr />
            <form>
                {/* Filtrar por Marcas */}
                <h6>Marcas</h6>
                <div>
                    <input type="checkbox" id="brand-adidas" />
                    <label htmlFor="brand-adidas">Adidas</label>
                </div>
                <div>
                    <input type="checkbox" id="brand-balenciaga" />
                    <label htmlFor="brand-balenciaga">Balenciaga</label>
                </div>
                <div>
                    <input type="checkbox" id="brand-kswiss" />
                    <label htmlFor="brand-kswiss">K-Swiss</label>
                </div>
                <div>
                    <input type="checkbox" id="brand-nike" />
                    <label htmlFor="brand-nike">Nike</label>
                </div>
                <div>
                    <input type="checkbox" id="brand-puma" />
                    <label htmlFor="brand-puma">Puma</label>
                </div>
                {/* Adicione mais checkboxes conforme necessário */}

                {/* Filtrar por Categoria */}
                <h6 className="opcfilter">Categoria</h6>
                <div>
                    <input type="checkbox" id="category-sport-leisure" />
                    <label htmlFor="category-sport-leisure">Esporte Lazer</label>
                </div>
                <div>
                    <input type="checkbox" id="category-casual" />
                    <label htmlFor="category-casual">Casual</label>
                </div>
                <div>
                    <input type="checkbox" id="category-utility" />
                    <label htmlFor="category-utility">Utilitário</label>
                </div>
                <div>
                    <input type="checkbox" id="category-running" />
                    <label htmlFor="category-running">Corrida</label>
                </div>

                {/* Filtrar por Gênero */}
                <h6 className="opcfilter">Gênero</h6>
                <div>
                    <input type="checkbox" id="gender-male" />
                    <label htmlFor="gender-male">Masculino</label>
                </div>
                <div>
                    <input type="checkbox" id="gender-female" />
                    <label htmlFor="gender-female">Feminino</label>
                </div>
                <div>
                    <input type="checkbox" id="gender-unisex" />
                    <label htmlFor="gender-unisex">Unisex</label>
                </div>

                {/* Filtrar por Estado */}
                <h6 className="opcfilter">Estado</h6>
                <div>
                    <input type="checkbox" id="condition-new" className="esta" />
                    <label htmlFor="condition-new">Novo</label>
                </div>
                <div>
                    <input type="checkbox" id="condition-used" className="esta" />
                    <label htmlFor="condition-used">Usado</label>
                </div>
            </form>
        </div>
    );
}

export default Filter;
