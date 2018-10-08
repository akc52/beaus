import React from 'react';
import PropTypes from 'prop-types';

const SelectedProduct = props => (
  <div className="selectedProduct">
    SelectedProduct {props.selectedId}
  </div>
);

SelectedProduct.propTypes =  {
  selectedId: PropTypes.number
}

export default SelectedProduct;
