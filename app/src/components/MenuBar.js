import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo_scp_blanc from "../img/logo_scp_blanc.png";
import logo_shop from  "../img/logo-shop.png"
import { Container } from "react-bootstrap";

const MenuBar = (props) => {
	return (
		<div className="menu-bar">
			<div className="title-box">
				<img src={logo_scp_blanc} />
				<div className="menu-elem-wrapper">
					<Link to="/" className="title">Menu Principal</Link>
					<Link to="/articles" className="title">SHOP</Link>
				</div>
			</div>					
			<div className="buttons">
				<div className="title-box">
				<Link to="/cart">
					<img src={logo_shop} /> {props.articles.length > 0 && ('(' + props.articles.length + ')')}
				</Link>
				</div>
			</div>			
		</div>
	);
}

export default MenuBar;