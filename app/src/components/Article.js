import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Article = (props) => {
	const id = props.article.id;

	return (
		<Card border="light" style={{ width: '18rem', background: "#404040", minHeight: "500px", marginBottom: "2rem" }}>
			<Card.Img variant="top" src={props.article.attributes.thumbnail.data == null ? "" : ("http://localhost:1337" + props.article.attributes.thumbnail.data.attributes.url)} />
			<Card.Body className="d-flex flex-column">
				<Card.Title>{props.article.attributes.name}</Card.Title>
				<Card.Text>
					{props.article.attributes.price}€
				</Card.Text>
				<Link to={"/description?id=" + id}><Button>Description {id}</Button></Link>				
				<Button className="mt-auto" onClick={() => props.addArticleToCart(props.article)} variant="primary">Ajouter au panier</Button>
			</Card.Body>
		</Card>
	);
}

export default Article;