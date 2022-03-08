import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const Article = (props) => {

<<<<<<< HEAD
=======
	let article = props.article.attributes;

>>>>>>> b69240796607c099315732a1e794196e217158b9
	return (
		<Card border="light" style={{ width: '18rem', background: "#404040", minHeight: "500px", marginBottom: "2rem" }}>
			<Card.Img variant="top" src={article.thumbnail.data == null ? "" : ("http://localhost:1337" + article.thumbnail.data.attributes.url)} />
			<Card.Body className="d-flex flex-column">
				<Card.Title>{article.name}</Card.Title>
				<Card.Text>
<<<<<<< HEAD
					{props.article.price}€
				</Card.Text>				
=======
					{article.price}€
				</Card.Text>
>>>>>>> b69240796607c099315732a1e794196e217158b9
				<Button className="mt-auto" onClick={() => props.addArticleToCart(props.article)} variant="primary">Ajouter au panier</Button>
			</Card.Body>
		</Card>
	);
}

export default Article;