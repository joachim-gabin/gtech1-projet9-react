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
import Helmet from 'react-helmet';
import Order from './Order';
import Description from './Description';



class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			cart: []
		};
	}

	componentDidMount() {
		if (localStorage.getItem("cart"))
			this.setState({ cart: JSON.parse(localStorage.getItem("cart")) });

		window.onbeforeunload = () => {
			localStorage.setItem("cart", JSON.stringify(this.state.cart));
		};
	}

	addArticleToCart(article) {

		let cart = [...this.state.cart];

		// Check if article is already present.
		for (let i = 0; i < cart.length; ++i) {
			if (cart[i].article.id == article.id) {

				// Increment article count, and we're done.
				cart[i].count++;
				return;
			}
		}

		// Else, add the article with initial count = 1.
		cart.push({ article: article, count: 1 });

		// Update the cart.
		this.setState({ cart: cart });
	}

	removeArticleFromCart(pos) {
		let newCart = this.state.cart;
		newCart.splice(pos, 1);
		
		this.setState({cart: newCart});
	}

	render() {

		return (
			<>
				<Helmet>
					<title>The SCP Shop</title>
				</Helmet>

				<Router>
					<Routes>
						<Route exact path='/' element={<Accueil cart={this.state.cart} />} />
						<Route exact path='/cart' element={<ShoppingCart cart={this.state.cart} removeArticleFromCart={(a) => this.removeArticleFromCart(a)} />} />
						<Route exact path="/articles" element={<ArticlePage cart={this.state.cart} addArticleToCart={(a) => this.addArticleToCart(a)} />} />
						<Route exact path='/description' element={<Description cart={this.state.cart} addArticleToCart={(a) => this.addArticleToCart(a)} />} />


						<Route exact path="/order" element={<Order cart={this.state.cart} />} />
					</Routes>
				</Router>
			</>
		);
	}
}

export default App;