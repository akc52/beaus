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
      //.filter(product => product.is_seasonal && product.producer_name === "Beau's All Natural Brewing")
      .map((product) =>
        <ProductItem
          id={product.id}
          key={product.id}
          name={product.name}
          handleSelectProduct={() => props.handleSelectProduct(product.id)}
        />
      )}
    </ul>
  </div>
);

ProductList.propTypes =  {
  products: PropTypes.array,
  selectProduct: PropTypes.func
}

export default ProductList;
