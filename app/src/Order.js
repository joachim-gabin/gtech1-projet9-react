import React from "react";
import { Container } from "react-bootstrap";
import { Link, renderMatches } from "react-router-dom";
import Footer from "./components/Footer";
import MenuBar from "./components/MenuBar";


class Order extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			status: 0,
		};
	}

	async componentDidMount() {

		let articles = [];
		this.props.cart.map((u, id) => {
			articles.push(u.id);
		})

		const request = {
			method: "POST",
			headers: { "Accept": "application/json", "Content-Type": "application/json" },
			body: JSON.stringify( { data: { "articles": articles } } )
		}
		let response = await fetch("http://localhost:1337/api/orders/", request);

		this.setState({ status: response.status });
	}

	render() {

		// Currently sending request...
		if (this.state.status == 0) {
			return (
				<>
					<MenuBar articles={this.props.cart} />

					<Container>
						<p className="text-center">Traitement en cours...</p>
					</Container>

					<Footer />
				</>
			);
		}

		// HTTP 200 : Success!
		else if (this.state.status == 200) {

			let total = 0;

			return (
				<>
					<MenuBar articles={this.props.cart} />
	
					<Container style={{padding: "200px 0"}}>
						<p className="text-center">Votre commande a bien été prise en compte.</p>
						<p className="text-center">Merci et à bientôt!</p>

						<br />

						<p>Récapitulatif de votre commande :</p>
						{
							this.props.cart.map((u, id) => {

								total += u.article.attributes.price;
								return (
									<>
										<p key={id}>
											{u.count} x {u.article.attributes.name}
										</p>
										<hr />
									</>
								);
							})
						}

						<br />

						<p>Pour un total de {total}€</p>

						<br />

						<Link to="/">Revenir à la page d'accueil.</Link>
					</Container>
	
					<Footer />
				</>
			);
		}

		// Else, there was an error.
		return (
			<>
				<MenuBar articles={this.props.cart} />

				<p>
					{ this.state.status == 200 ? "Votre commande a bien été prise en compte." : "Y a eu un pb lol (" + this.state.status + ")" }
				</p>

				<Footer />
			</>
		);
	}
}

export default Order;