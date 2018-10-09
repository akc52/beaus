import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

const ProductList = props => (
  <div className="productList__Container">
    <ul className="productList">
    {/*
      TO DO this filtering should not be here, in app.js on fetch

      ALSO id/description/image should be set in App.js from products array
    */}
      {props.products
      .filter(product => product.is_seasonal && product.producer_name === "Beau's All Natural Brewing")
      .map((product) =>
        <ProductItem
          key={product.id}
          name={product.name}
          selectProduct={() => props.selectProduct(product.id, product.tasting_note, product.image_url,  product.name)}
        />
      )}
    </ul>
  </div>
);

ProductList.propTypes =  {
  products: PropTypes.array.isRequired,
  selectProduct: PropTypes.func.isRequired
}

export default ProductList;
