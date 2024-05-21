/** @format */

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setProducts } from "../redux/actions/products";

function Card({ products, setProducts }) {
  useEffect(() => {
    setProducts();
  }, [setProducts]);

  return (
    <div className="container">
      <div className="movies">
        {products &&
          products.map((product) => (
            <div key={product.id} className="card1">
              <img src={product.image} alt={product.title} />
              <h6>{product.title}</h6>
              <p className="mt-2 mb-3">${product.price}</p>
              <div className="boton">
                <Link to={`/${product.id}`} state={{ product }}>
                  <button
                    type="button"
                    className="btn btn-primary mt-3 mb-3 bottom-0 start-50"
                  >
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.Products.products,
});

export default connect(mapStateToProps, {
  setProducts,
})(Card);
