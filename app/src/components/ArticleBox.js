import React from 'react'

class ArticleBox extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="ArticleBox">
				<p>{this.props.name}</p>
				<p>{this.props.price}€</p>
			</div>
		);
	}
}

export default ArticleBox;