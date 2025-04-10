import React from 'react';

function Product(props) {
  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <img className="card-img-top" src={props.thumbnail} alt={props.title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text text-primary">{props.price}</p>
          <div className="mt-auto d-flex justify-content-between gap-2">
            <button className="btn btn-primary flex-grow-1">
              Ajouter 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;