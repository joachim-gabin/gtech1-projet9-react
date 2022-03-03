import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo_scp_blanc from "../img/logo_scp_blanc.png";

const MenuBar = (props) => {
	return (
		<div className="menu-bar">
			<div className="title-box">
				<img src={logo_scp_blanc} />
				<div className="menu-elem-wrapper">
					<Link to="/" className="title">Menu Bar Title Placeholder</Link>
				</div>
			</div>
			
			<div className="menu-elem-wrapper buttons">
				<Link to="/cart">
					Mon Panier {props.articles.length > 0 && ('(' + props.articles.length + ')')}
				</Link>
			</div>
		</div>
	);
}

export default MenuBar;