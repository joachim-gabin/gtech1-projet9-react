import React from 'react'
import { Button, Card } from 'react-bootstrap';

const Article = (props) => {
	return (
		<Card style={{ width: '18rem', background: "#404040", minHeight: "100%" }}>
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title>{props.article.name}</Card.Title>
				<Card.Text>
					{props.article.price}€
				</Card.Text>
				<Button onClick={() => props.addArticleToCart(props.article)} variant="primary">Ajouter au panier</Button>
			</Card.Body>
		</Card>
	);
}

export default Article;