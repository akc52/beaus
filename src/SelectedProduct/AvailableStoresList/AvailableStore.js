import React from 'react';
import PropTypes from 'prop-types';

const AvailableStore = props => (
  <li className="storeList__item">
    {props.storeName}
    <address>
      {props.address1}, {props.address2}. {props.city}, {props.postalCode}
    </address>
  </li>
);

AvailableStore.propTypes =  {
  address1: PropTypes.string,
  address2: PropTypes.string,
  city: PropTypes.string,
  storeName: PropTypes.string,
  postalCode: PropTypes.string,
}

export default AvailableStore;
