import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Accueil from './Accueil';
import ShoppingCart from './ShoppingCart';
import ArticlePage from './ArticlePage';
import React from 'react';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			cart: []
		};
	}

	addArticleToCart(article) {
		this.setState((prevState) => ({
			cart: [...prevState.cart, article]
		}), () => { console.log(this.state.cart); });
	}

	render() {
		return (
			<Router>
				<Routes>
					<Route exact path='/' element={<Accueil cart={this.state.cart} />} />
					<Route exact path='/cart' element={<ShoppingCart cart={this.state.cart} />} />
					<Route exact path="/articles" element={<ArticlePage cart={this.state.cart} addArticleToCart={(a) => this.addArticleToCart(a)} />} />
				</Routes>
			</Router>
		);
	}
}

export default App;
