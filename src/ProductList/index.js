import React from 'react';
import PropTypes from 'prop-types';

const ProductList = props => (
  <div className="productList__Container">
    <ul className="productList">
      {props.products}
    </ul>
  </div>
);

ProductList.propTypes =  {
  products: PropTypes.array.isRequired,
  selectProduct: PropTypes.func.isRequired
}

export default ProductList;
