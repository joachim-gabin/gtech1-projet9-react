import React, { Component } from "react";

import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";
import { Button, Container, Table } from "react-bootstrap";

import logo from "./logo.jpg"



class ShoppingCart extends React.Component {

	constructor(props) {
		super(props);
	}

    render() {

		let somme = 0;

		this.props.cart.forEach(element => {
			somme += element.price;		
		});

        return (
			<>
				<MenuBar articles={this.props.cart} />

				<Container>
					<Table striped bordered variant="dark" className="mt-5 mb-3">
						<thead>
							<tr>
								<th>Image</th>
								<th>Nom de l'article</th>
								<th>Supprimer</th>
							</tr>
						</thead>

						<tbody>
							{
								this.props.cart.map((u, i) => {
									return (
										<tr>
											<td><img src={logo} alt="A" width="128" /></td>
											<td>{u.name}</td>
											<td><Button onClick={() => this.props.removeArticleFromCart(i)} variant="danger">Delete</Button></td>

										</tr>
									);
								})
							}
						</tbody>
					</Table>

					<div className="d-grid gap-2">
						{
							this.props.cart.length == 0
							? <Button variant="success" className="mb-3" size="lg" disabled>Procéder au paiement</Button>
							: <Button variant="success" className="mb-3" size="lg">Procéder au paiement ({somme}€)</Button>
						}
					</div>
				</Container>
				
				<Footer />
			</>
        );
    }
}

export default ShoppingCart;