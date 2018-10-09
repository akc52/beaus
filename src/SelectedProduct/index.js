import React from 'react';
import PropTypes from 'prop-types';

const SelectedProduct = props => (
  <div className="selectedProduct">
    <h2>{props.selectedName}</h2>
    <p>
    <img
      className="selectedProduct__image"
      src={props.selectedImage}
      data-src={props.selectedImage}
      data-src-retina={props.selectedImage}
      alt="" />
    </p>
    <p>
    {props.selectedId}
    </p>
    <p>
    {props.selectedDescription}
    </p>
    <p>
    {/* TO DO list stores that carry selected beer */}
    </p>
  </div>
);

SelectedProduct.propTypes =  {
  selectedDescription: PropTypes.string,
  selectedId: PropTypes.number,
  selectedImage: PropTypes.string,
  selectedName: PropTypes.string
}

export default SelectedProduct;
