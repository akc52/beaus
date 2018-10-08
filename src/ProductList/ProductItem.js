import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = props => (
  <li
    className="productList__item"
    key={product.id}
    onClick={this.selectProduct}>
    {product.name}
  </li>
);

ProductItem.propTypes =  {
  id: PropTypes.int.isRequired,
  selectProduct: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default ProductItem;
