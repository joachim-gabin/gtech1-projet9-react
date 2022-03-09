import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo_scp_blanc from "../img/logo_scp_blanc.png";
import logo_shop from  "../img/logo-shop.png"
import { Container } from "react-bootstrap";

const MenuBar = (props) => {

	let numArticles = 0;
	for (let i = 0; i < props.articles.length; ++i) {
		numArticles += props.articles[i].count;
	}

	return (
		<div className="menu-bar">
			<div className="title-box">
				<img src={logo_scp_blanc} />
				<div className="menu-elem-wrapper">
					<Link to="/" className="title">Menu Principal </Link>
					<Link to="/articles" className="title" style={{"margin-left" : "25px"}}>SHOP</Link>
				</div>
			</div>					
			<div className="buttons">
				<div className="title-box">
				<Link to="/cart">
					<img src={logo_shop} /> {numArticles > 0 && ('(' + numArticles + ')')}
				</Link>
				</div>
			</div>			
		</div>
	);
}

export default MenuBar;