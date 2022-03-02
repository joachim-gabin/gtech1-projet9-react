import React, { Component } from 'react';

import MenuBar from './components/MenuBar';
import Footer from './components/Footer';

import logo from './logo.jpg';

class Accueil extends React.Component {

    render() {
        return (
            <div>
                <MenuBar />

				<div className="App-header">
					<img src={logo} width="300" style={{"borderRadius": "300px"}} />
					<h1>THE SCP FOUNDATION</h1>
				</div>

				<div className="main-content">
					<h2>Qu'est-ce que la fondation SCP?</h2>
					<p>(A compléter, et peut-être mettre sur une autre page)</p>
					<p>
						SCP est un sigle signifiant en Anglais "Special Containment Procedures" et qui se réfère aussi à la devise de la fondation "Secure. Contain. Protect."

						Chaque SCP est désigné par un numéro à trois chiffres ou plus. Le plus connu de tous est sans doute SCP-173.
					</p>
					<p>
						Il existe plusieurs jeux autour de la communauté SCP, dont SCP: Containment Breach.
					</p>
				</div>

                <Footer />
            </div>
        );
    }
}

export default Accueil;