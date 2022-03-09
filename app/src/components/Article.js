import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, Container } from 'react-bootstrap';
import info from '../img/article-info.png';
import redacted from '../img/Redacted.webp';


const Article = (props) => {

	let article = props.article.attributes;

	return (
		<Card border="light" style={{ width: '18rem', background: "#404040", minHeight: "500px", marginBottom: "2rem" }}>
			<Card.Img variant="top" src={article.thumbnail.data == null ? redacted : ("http://localhost:1337" + article.thumbnail.data.attributes.url)} />
			
			<Card.Body className="d-flex flex-column">
				<Card.Title>{article.name}</Card.Title>
				<Card.Text>
				
					{article.price}€

				</Card.Text>
				<div className="mt-auto d-flex">

					<Button onClick={() => props.addArticleToCart(props.article)} style={{alignItems: "stretch", flex: "1"}} variant="primary">Ajouter au panier</Button>

					<Link to={"/description?id=" + props.article.id}><Button className="mt-auto" style={{marginLeft: "8px"}}><img src={info} style={{width: "32px", height: "32px"}}></img></Button></Link>

				</div>				
			</Card.Body>
		</Card>
	);
}

export default Article;