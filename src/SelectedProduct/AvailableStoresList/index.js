import React from 'react';
import PropTypes from 'prop-types';
import AvailableStore from './AvailableStore';

const AvailableStoresList = props => (
  <div className="storeList__Container">
    <h3>Available at these LCBO's:</h3>
    <ul className="storeList">
    {/*
      TO DO this filtering should not be here, in app.js on fetch

      ALSO id/description/image should be set in App.js from products array
    */}
      {props.availableStores
      .map((store) =>
        <AvailableStore
          key={store.id}
          address1={store.address_line_1}
          address2={store.address_line_2}
          city={store.city}
          storeName={store.name}
          postalCode={store.postal_code} />
      )}
    </ul>
  </div>
);

AvailableStoresList.propTypes =  {
  availableStores: PropTypes.array
}

export default AvailableStoresList;
