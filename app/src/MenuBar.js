import React, { Component } from "react";
import { Link } from "react-router-dom";

class MenuBar extends React.Component {

    render() {
        return (
            <div class="menu-bar">
                <Link to="/" class="title">Menu Bar Title Placeholder</Link>
                
                <div class="buttons">
                    <Link to="/cart">My Shopping Cart</Link>
                </div>
            </div>
        );
    }
}

export default MenuBar;