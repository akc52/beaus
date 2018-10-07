import React from 'react';

const ProductList = props => (
  <ul className="productList">
    {props.products}
  </ul>
);

export default ProductList;
