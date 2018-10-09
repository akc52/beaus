import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = props => (
  <li
    className="productList__item"
    key={props.key}
    onClick={props.selectProduct}>
    {props.name}
  </li>
);

ProductItem.propTypes =  {
  key: PropTypes.number.isRequired,
  selectProduct: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default ProductItem;
