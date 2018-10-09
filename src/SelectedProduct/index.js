import React from 'react';
import PropTypes from 'prop-types';
import AvailableStoresList from './AvailableStoresList';

const SelectedProduct = props => (
  <div className="selectedProduct">
    <h2>{props.selectedProduct.name}</h2>
    <img
      className="selectedProduct__image"
      src={props.selectedProduct.image_thumb_url}
      data-src={props.selectedProduct.image_thumb_url}
      data-src-retina={props.selectedProduct.image_thumb_url}
      alt="" />
    <p>
    {props.selectedProduct.tertiary_category}
    </p>
    <p>{props.selectedProduct.package}
    </p>
    <p>
    {props.selectedProduct.tasting_note}
    </p>
    <p>
    {/* TO DO list stores that carry selected beer */}
    </p>
    <AvailableStoresList availableStores={props.availableStores} />
  </div>
);

SelectedProduct.propTypes =  {
  selectedProduct: PropTypes.object,
  availableStores: PropTypes.array
}

export default SelectedProduct;
