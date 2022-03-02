import React, { Component } from "react";

import { Container } from 'react-bootstrap'

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
					{
						this.state.articles.data && this.state.articles.data.map((u, i) => {
							return <Article key={u.id} name={u.attributes.name} price={u.attributes.price} />
						})
					}
				</Container>

				<Footer />
            </>
        );
    }
}

export default ArticlePage;