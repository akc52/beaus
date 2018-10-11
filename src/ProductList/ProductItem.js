import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = props => (
  <li
    className={ props.id === props.selectedProductId ? 'productList__item selected': 'productList__item' }
    key={props.id}
    onClick={props.handleSelectProduct}>
    {props.name}
  </li>
);

ProductItem.propTypes =  {
  id: PropTypes.number.isRequired,
  selectedProductId: PropTypes.number,
  handleSelectProduct: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default ProductItem;
