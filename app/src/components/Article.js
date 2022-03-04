import React from 'react'
import { Button, Card } from 'react-bootstrap';

const Article = (props) => {
	return (
		<Card border="light" style={{ width: '18rem', background: "#404040", minHeight: "500px", marginBottom: "2rem" }}>
			<Card.Img variant="top" src={props.article.thumbnail.data == null ? "" : ("http://localhost:1337" + props.article.thumbnail.data.attributes.url)} />
			<Card.Body className="d-flex flex-column">
				<Card.Title>{props.article.name}</Card.Title>
				<Card.Text>
					{props.article.price}€
				</Card.Text>
				<Button className="mt-auto" onClick={() => props.addArticleToCart(props.article)} variant="primary">Ajouter au panier</Button>
			</Card.Body>
		</Card>
	);
}

export default Article;