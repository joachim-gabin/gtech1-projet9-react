import React, { Component } from "react";

import MenuBar from "./MenuBar";
import Footer from "./Footer";

class ArticleInfo extends React.Component {

    render() {
        const queryParams = new URLSearchParams(window.location.search);
        const truc = queryParams.get("a");
        return (
            <div>
                <MenuBar />

				<div style={{"minHeight": "100vh"}}>
					<p>Article :</p>
					<p>{truc}</p>
				</div>

				<Footer />
            </div>
        );
    }
}

export default ArticleInfo;