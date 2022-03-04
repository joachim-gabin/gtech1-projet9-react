import React, { Component } from "react";

import { Button, Col, Container, Form, Nav, Row, Spinner } from 'react-bootstrap'

import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";

import Article from './components/Article';
import Category from "./components/Category";



class ArticlePage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			categories: [],
			searchFilter: "",
			loading: true
		}
	}

	async componentDidMount() {

		// Simulation of a delay to test loading screen.
		setTimeout(async () => {

			let response = await fetch("http://localhost:1337/api/articles?populate=*", {method: "GET", headers: {"Accept": "application/json", "Content-Type": "application/json"}});
			const articles = await response.json();

			response = await fetch("http://localhost:1337/api/categories", {method: "GET", headers: {"Accept": "application/json", "Content-Type": "application/json"}});
			const categories = await response.json();

			this.setState({articles: articles, categories: categories, loading: false});

		}, 500);
	}

	filterResults() {

		let result = [];
		this.state.articles.data.map((u, id) => {
			if (u.attributes.name.startsWith(this.state.searchFilter)) {
				result.push(u.attributes);
			}
		});

		return result;
	}

	render() {

		// Loading screen.
		if (this.state.loading) {
			return (
				<>
					<MenuBar articles={this.props.cart} />

					<Container className="text-center pt-5 pb-5">
						<Spinner animation="border" />
						<p className="ml-5">Chargement des articles...</p>
					</Container>

					<Footer />
				</>
			);
		}

		let results = this.filterResults();

		return (
			<>
				<MenuBar articles={this.props.cart} />

				<div className="py-3" style={{background: "gray", position: "sticky", top: "64px", zIndex: "1"}}>
					<Container>
						<Form.Control type="text" placeholder="Chercher des articles..." style={{"display": "block"}} onChange={(event) => { this.setState({searchFilter: event.target.value}); }} />
						<p className="pt-3 mb-0">{
							(results.length == 0 ? "No" : results.length) + (results.length == 1 ? " résultat." : " résultats.")
						}</p>
					</Container>
				</div>

				<Row>
					<Col xs={0} md={3} className="py-3" style={{background: "rgba(127, 127, 127, 0.3)", position: "sticky", top: "192px"}}>
						<Container>
						{
							this.state.categories.data.map((u, id) => {
								return (
									<div key={id} className="d-grid gap-2 mb-3">
										<Button>{u.attributes.name}</Button>
									</div>
								);
							})
						}
						</Container>
					</Col>

					<Col xs={12} md={9} className="py-3">
						<Container>
							<Row className="align-items-center">
							{
								results.map((u, id) => {
									return (
										<Col key={id} className="d-flex justify-content-center" xs={6} lg={4} xl={3}>
											<Article article={u} addArticleToCart={this.props.addArticleToCart} />
										</Col>
									);
								})
							}
							</Row>
						</Container>
					</Col>
				</Row>

				<p>
					{JSON.stringify(this.state.articles, undefined, 4)}
				</p>

				<Footer />
			</>
		);
	}
}

export default ArticlePage;