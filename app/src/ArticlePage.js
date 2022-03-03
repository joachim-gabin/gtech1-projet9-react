import React, { Component } from "react";

import { Col, Container, Row, Spinner } from 'react-bootstrap'

import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";

import Article from './components/Article';



class ArticlePage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			loading: true
		}
	}

	async componentDidMount() {

		// Simulation of a delay to test loading screen.
		setTimeout(async () => {

			const response = await fetch("http://localhost:1337/api/articles", {method: "GET", headers: {"Accept": "application/json", "Content-Type": "application/json"}});
			const articles = await response.json();

			this.setState({articles: articles, loading: false});

		}, 3000);
	}

    render() {

		// Loading screen.
		if (this.state.loading) {
			return (
				<>
					<MenuBar />

					<Container className="text-center pt-5 pb-5">
						<Spinner animation="border" />
						<p className="ml-5">Chargement des articles...</p>
					</Container>

					<Footer />
				</>
			);
		}

        return (
            <>
                <MenuBar />

				<p>
					{JSON.stringify(this.state.articles, undefined, 4)}
				</p>
				<Container>
					<Row className="align-items-center">
						{
							this.state.articles.data.map((u, id) => {
								return (
									<Col key={id} className="d-flex justify-content-center" xs={3}>
										<Article article={u.attributes} addArticleToCart={this.props.addArticleToCart} />
									</Col>
								);
							})
						}
					</Row>
				</Container>

				<Footer />
            </>
        );
    }
}

export default ArticlePage;