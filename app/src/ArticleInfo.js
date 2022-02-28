import React, { Component } from "react";

import MenuBar from "./MenuBar";

class ArticleInfo extends React.Component {

    render() {
        const queryParams = new URLSearchParams(window.location.search);
        const truc = queryParams.get("a");
        return (
            <div>
                <MenuBar />

                <p>Article :</p>
                <p>{truc}</p>
            </div>
        );
    }
}

export default ArticleInfo;