import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo_scp_blanc from "./img/logo_scp_blanc.png";

const MenuBar = () => {
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
					Mon Panier
				</Link>
			</div>
		</div>
	);
}

export default MenuBar;