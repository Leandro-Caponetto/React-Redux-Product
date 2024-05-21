/** @format */

import { useParams, useLocation } from "react-router";

function Product() {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state.product;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} className="star">
            &#9733;
          </span>
        ); // Full star
      } else {
        stars.push(
          <span key={i} className="star">
            &#9734;
          </span>
        ); // Empty star
      }
    }
    return stars;
  };

  return (
    <div>
      <h2>Product Detail - Category: {product.category}</h2>
      <div className="d-flex col-12">
        {product && (
          <div className="card col-7">
            <img src={product.image} alt={product.title} />
            <p>Product ID: {id}</p>
            <div className="card-body">
              <h3 className="text-secondary"> {product.title}</h3>
              <p className="card-text text-success"> ${product.price}</p>
            </div>
          </div>
        )}
        <div className="col-3 h-100">
          {product && (
            <div className="card ">
              <h3 className="text-secondary">Description</h3>
              <p className="text-primary">{product.description}</p>
              <div className="mt-2">
                <h5 className="text-secondary">Rating</h5>
                <p>
                  {renderStars(product.rating.rate)} ({product.rating.rate} / 5)
                  Based on {product.rating.count} reviews
                </p>
              </div>
            </div>
          )}
          <div className=" boton buton">
            <button type="button" className="btn btn-success ">
              add <i className="fa-solid fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
