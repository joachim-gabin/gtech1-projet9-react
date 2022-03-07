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
			shownArticles: [],
			categories: [],
			searchFilter: "",
			catFilter: "",
			loading: true
		}
	}

	async componentDidMount() {

		// Simulation of a delay to test loading screen.
		setTimeout(async () => {

			// Load categories.
			let response = await fetch("http://localhost:1337/api/categories", {method: "GET", headers: {"Accept": "application/json", "Content-Type": "application/json"}});
			const categories = await response.json();

			// Load articles.
			await this.updateArticles("", "");

			this.setState({ categories: categories, loading: false });

		}, 500);
	}

	async updateArticles(searchFilter, catFilter) {

		let url = "http://localhost:1337/api/articles?populate=*";
		if (catFilter != "")
			url += "&filters[categories][name][$eq]=" + catFilter;
		let response = await fetch(url, {method: "GET", headers: {"Accept": "application/json", "Content-Type": "application/json"}});
		const articles = await response.json();

		let shownArticles = [];
		articles.data.map((u, id) => {
			if (u.attributes.name.toLowerCase().includes(searchFilter)) {
				shownArticles.push(u);
			}
		});

		this.setState({ articles: articles, shownArticles: shownArticles });
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

		//let results = await this.filterResults();

		return (
			<>
				<MenuBar articles={this.props.cart} />

				{ /* Search bar with number of results displayed. */ }
				<div className="py-3" style={{background: "gray", position: "sticky", top: "64px", zIndex: "1"}}>
					<Container>
						<Form.Control type="text" placeholder="Chercher des articles..." style={{"display": "block"}} onChange={(event) => { this.updateArticles(event.target.value, this.state.catFilter); }} />
						<p className="pt-3 mb-0">{
							(this.state.shownArticles.length == 0 ? "Pas de" : this.state.shownArticles.length) + (this.state.shownArticles.length == 1 ? " résultat." : " résultats.")
						}</p>
					</Container>
				</div>

				<Row>
					<Col xs={0} md={3} className="py-3" style={{background: "rgba(127, 127, 127, 0.3)"}}>
						<Container style={{ position: "sticky", top: "200px" }}>
						{
							this.state.categories.data.map((u, id) => {
								return (
									<div key={id} className="d-grid gap-2 mb-3">
										<Button onClick={() => this.updateArticles(this.state.searchFilter, u.attributes.name)}>{u.attributes.name}</Button>
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
								this.state.shownArticles.map((u, id) => {
									return (
										<Col key={id} className="d-flex justify-content-center" xs={6} lg={4} xl={3}>
											<Article article={u.attributes} addArticleToCart={this.props.addArticleToCart} />
										</Col>
									);
								})
							}
							</Row>
						</Container>
					</Col>
				</Row>

				<p style={{"fontSize": "14px"}}>
					{JSON.stringify(this.state.articles, undefined, 4)}
				</p>
			</>
		);
	}
}

export default ArticlePage;