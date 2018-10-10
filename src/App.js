import React, { Component } from 'react';
import './App.css';
import ProductList from './ProductList';
import SelectedProduct from './SelectedProduct';
import fetchJsonp from 'fetch-jsonp'; //This was the life saver

// const ACCESS_KEY = 'MDo0NTllYzdlYy1jNzc0LTExZTgtYTc1YS1jN2NjNTYwZWNhOTA6WGEzSDdhS2xqbW1wc05ERjE1MFBZMUg2Ykw5SUpnMEpDMEFl';
const PRODUCTS_URL = 'http://lcboapi.com/products/?q=beau%27s+all+natural+brewing';
const STORES_URL = 'http://lcboapi.com/stores?product_id=';

// Available stores from 'Beau's Tom Green Summer Stout'
// lcboapi.com/stores?product_id=519959

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSelectProduct = this.handleSelectProduct.bind(this);
    this.state = {
      selectedProduct: {},
      products: [],
      availableStores: []
    }
  }

  componentDidMount() {

    fetchJsonp(PRODUCTS_URL)
      .then(results => {
        return results.json();
      }).then( data => {
        // console.log("fetched data.result", data.result);
        this.setState({
          products: data.result
            .filter(product => product.is_seasonal && product.producer_name === "Beau's All Natural Brewing")
        });

        this.handleSelectProduct(this.state.products[0].id);
        
      }).catch(function(error) {
        console.log(error)
      });
  }

  // TO DO refactor for both fetch functionality, when api fetch works
  fetchStoresData = (url) => {
    fetchJsonp(url)
    .then(results => {
      return results.json();
    }).then( data => {
      // console.log("fetched stores data.result", data.result);
      this.setState({ availableStores: data.result})
    }).catch(function(error) {
      console.log(error)
    });
  }

  getFullStoresUrl = id => STORES_URL + id;

  handleSelectProduct = id => {
    this.fetchStoresData(this.getFullStoresUrl(id));
    this.setState({
      selectedProduct: this.state.products.find((product) => product.id === id)
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Beau's Seasonal Beer</h1>
          <p>
            Since 2006 Beau’s All Natural has been brewing interesting, tasty beers like our Lug Tread Lagered Ale using the best ingredients & local spring water. Our family takes pride in creating unique, wonderful and certified organic craft beer, conceived with honest consideration for the environment and our local communities, and delivered with a sense of friendly relationship. We are an award-winning, local, family-run, organic, and independent brewery.
          </p>
        </header>
        <main>
          <ProductList
            products={this.state.products}
            handleSelectProduct={this.handleSelectProduct} />
          <SelectedProduct
            selectedProduct={this.state.selectedProduct}
            availableStores={this.state.availableStores} />
        </main>
      </div>
    );
  }
}

export default App;
