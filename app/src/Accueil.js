import React, { Component } from 'react';
import MenuBar from './MenuBar';
import Footer from './Footer';

import logo from './logo.jpg';

class Accueil extends React.Component {

    render() {
        return (
            <div>
                <MenuBar />

                <div class="App-header">
                    <img src={logo} width="300" />
                    <p>THE SCP FOUNDATION</p>
                </div>

                <Footer />
            </div>
        );
    }
}

export default Accueil;