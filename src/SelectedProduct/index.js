import React from 'react';
import PropTypes from 'prop-types';

const SelectedProduct = props => (
  <div className="selectedProduct">
    SelectedProduct {props.selectedId}
  </div>
);

SelectedProduct.propTypes =  {
  id: PropTypes.int
}

export default SelectedProduct;
