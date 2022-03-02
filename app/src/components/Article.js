import React from 'react'

const Article = (props) => {
	return (
		<div className="Article">
			<p>{props.name}</p>
			<p>{props.price}€</p>
		</div>
	);
}

export default Article;