import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

const ProductList = props => (
  <div className="productList__Container">
    <ul className="productList">
      {props.products
      .map((product) =>
        <ProductItem
          id={product.id}
          key={product.id}
          name={product.name}
          selectedProductId={props.selectedProductId}
          handleSelectProduct={() => props.handleSelectProduct(product.id)}
        />
      )}
    </ul>
  </div>
);

ProductList.propTypes =  {
  products: PropTypes.array.isRequired,
  selectedProductId: PropTypes.number,
  handleSelectProduct: PropTypes.func.isRequired
}

export default ProductList;
