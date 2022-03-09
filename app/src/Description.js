import { Button, Container } from 'react-bootstrap';
import React, { Component } from 'react';
import { Link, renderMatches } from 'react-router-dom';

import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";


class Description extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            article: [],
            id: -1,
            loading: true
        }
    }

    async componentDidMount() {
        const queryString = await window.location.search;
        const urlParams = await new URLSearchParams(queryString);
        const id = await urlParams.get("id");

        let response = await fetch("http://localhost:1337/api/articles/" + id + "?populate=*", {method: "GET", headers: {"Accept": "application/json", "Content-Type": "application/json"}});
        const a = await response.json();

        this.setState({ id: id, article: a.data, loading: false});
    }

    render() {
        
        if (this.state.loading)
        {
            return (
                <>
                    <MenuBar articles={this.props.cart} />                
                    <p>Chargement en cours</p>
                </>
            );
        }
		
        return(
			<>
				<MenuBar articles={this.props.cart} />   

				<p>{JSON.stringify(this.state.article)}</p>
				
				<Container border="light" className="main-content" style={{"padding": "60px", "background": "#404040", "marginTop": "100px", "marginBottom": "140px"}}>
					<div class="underline">
						<h1 class="text-center">{this.state.article.attributes.name}</h1>                
					</div>

					<div className="text-center mb-5">
                        <div style={{"marginTop": "75px", "marginBottom": "75px"}}>
						    {this.state.article.attributes.thumbnail.data == null ? <p class="anim-alarm red-light">/!\ IMAGE CONFIDENTIELLE /!\</p> : <img src={("http://localhost:1337" + this.state.article.attributes.thumbnail.data.attributes.url)}></img>}
						</div>
                        <p>{this.state.article.attributes.description}</p>

                        <Button onClick={() => this.props.addArticleToCart(this.state.article)} variant="primary">Ajouter au panier</Button>						
                        <Link to="/articles">
							<Button size="lg">Retourner a la boutique</Button>
						</Link>
					</div>
				</Container>

				<Footer />
			</>
        );
    }
}

export default Description;