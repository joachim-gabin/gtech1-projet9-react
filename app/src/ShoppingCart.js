import React, { Component } from "react";

import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";
import { Button, Container, Table } from "react-bootstrap";

import logo from "./logo.jpg"
import { Link } from "react-router-dom";



class ShoppingCart extends React.Component {

	constructor(props) {
		super(props);
	}

    render() {

		let somme = 0;

		this.props.cart.forEach(element => {
			somme += element.article.attributes.price * element.count;		
		});

        return (
			<>
				<MenuBar articles={this.props.cart} />

				<Container>

					{ /* List of articles in the cart. */ }
					<Table striped bordered variant="dark" className="mt-5 mb-3">
						<thead>
							<tr>
								<th>Image</th>
								<th>Nom de l'article</th>
								<th>Quantité</th>
								<th>Supprimer</th>
							</tr>
						</thead>

						<tbody>
							{
								this.props.cart.map((u, i) => {
									return (
										<tr key={i}>
											<td><img src={logo} alt="A" width="128" /></td>
											<td>{u.article.attributes.name}</td>
											<td>{u.count}</td>
											<td><Button onClick={() => this.props.removeArticleFromCart(i)} variant="danger">Delete</Button></td>

										</tr>
									);
								})
							}
						</tbody>
					</Table>

					{ /* Proceed to payment button. */ }
					{
						this.props.cart.length == 0
						? <div className="d-grid gap-2"><Button variant="success" className="mb-3" size="lg" disabled>Procéder au paiement</Button></div>
						: <Link to="/order" className="d-grid gap-2"><Button variant="success" className="mb-3" size="lg">Procéder au paiement ({somme}€)</Button></Link>
					}
				</Container>
				
				<Footer />
			</>
        );
    }
}

export default ShoppingCart;