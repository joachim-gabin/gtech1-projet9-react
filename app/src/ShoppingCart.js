import React, { Component } from "react";

import MenuBar from "./MenuBar";
import Footer from "./Footer";

class ShoppingCart extends React.Component {

    render() {
        return (
            <div>
                <MenuBar />
				<div style={{"minHeight": "100vh"}}>

				</div>
				<Footer />
            </div>
        );
    }
}

export default ShoppingCart;