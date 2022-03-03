import React, { Component } from "react";
import { Link } from "react-router-dom";

import cart from "../cart.png";
import logo from "../logo.jpg";

const MenuBar = () => {
	return (
		<div className="menu-bar">
			<div className="title-box">
				<img src={logo} />
				<div className="menu-elem-wrapper">
					<Link to="/" className="title">Menu Bar Title Placeholder</Link>
				</div>
			</div>
			
			<div className="menu-elem-wrapper buttons">
				<Link to="/cart">
					Mon Panier
				</Link>
			</div>
		</div>
	);
}

export default MenuBar;