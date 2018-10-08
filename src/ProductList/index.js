import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

const ProductList = props => (
  <div className="productList__Container">
    <ul className="productList">
      {props.products
      .filter(product => product.is_seasonal && product.producer_name === "Beau's All Natural Brewing")
      .map((product, index) =>
      <ProductItem
        id={product.id}
        name={product.name}
        selectProduct={() => props.selectProduct(product.id)}
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
