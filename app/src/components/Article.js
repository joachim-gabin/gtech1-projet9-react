import React from 'react'
import { Button, Card } from 'react-bootstrap';

const Article = (props) => {
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title>{props.article.name}</Card.Title>
				<Card.Text>
					{props.article.price}€
				</Card.Text>
				<Button onClick={() => props.addArticleToCart(props.article)} variant="primary">Add to cart</Button>
			</Card.Body>
		</Card>
	);
}

export default Article;