import React from 'react';

function Product({ title, price, thumbnail }) {
  return (
    <div className="card shadow-sm">
      <img className="bd-placeholder-img card-img-top" src={thumbnail} alt={title} />
      <div className="card-body">
        <p className="card-title">{title}</p>
        <p className="card-text">{price}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              <i className="fas fa-cart-plus"></i> Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
