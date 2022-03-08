import { Button, Container } from 'react-bootstrap';
import React, { Component } from 'react';
import { Link, renderMatches } from 'react-router-dom';

/* match.params.id*/
class Description extends React.Component {
    
    constructor() {
        super();
        this.state = {
            article: [],
            id: -1
        }
    }

    async componentDidMount() {
        const queryString = await window.location.search;
        const urlParams = await new URLSearchParams(queryString);
        const id = await urlParams.get("id");


        let response = await fetch("http://localhost:1337/api/articles/"+id, {method: "GET", headers: {"Accept": "application/json", "Content-Type": "application/json"}});
        const a = await response.json();
        this.setState({ id: id, article: a.data.attributes });

    }

    render() {
        
        return(
        <>
        <p>{JSON.stringify(this.state.article)}</p>
        <h1 class="text-center">{this.state.article.name}</h1>

        <Container className="main-content" style={{"padding": "60px", "background": "#404040", "marginTop": "100vh", "marginBottom": "100px"}}>
            <div className="text-center mb-5">
                <p>{this.state.article.description}</p>
                <Link to="/articles">
                    <Button size="lg">Retourner a la boutique</Button>
                </Link>
            </div>
        </Container>
        </>



        );
    }
}

export default Description;