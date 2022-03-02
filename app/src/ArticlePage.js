import React, { Component } from "react";

import { Col, Container, Row } from 'react-bootstrap'

import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";

import Article from './components/Article';



class ArticlePage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			articles: []
		}
	}

	async componentDidMount() {
		const response = await fetch("http://localhost:1337/api/articles", {method: "GET", headers: {"Accept": "application/json", "Content-Type": "application/json"}});
		const articles = await response.json();
		this.setState({articles: articles});
	}

    render() {
        return (
            <>
                <MenuBar />

				<p>
					{JSON.stringify(this.state.articles, undefined, 4)}
				</p>
				<Container>
					<Row className="align-items-center">
						{
							this.state.articles.data && this.state.articles.data.map((u, id) => {
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