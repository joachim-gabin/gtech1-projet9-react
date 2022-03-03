import React, { Component } from 'react';

import MenuBar from './components/MenuBar';
import Footer from './components/Footer';

import logo from './logo.jpg';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


class Accueil extends React.Component {

    render() {
        return (
            <div>
                <MenuBar />

				<div className="App-header">
					<div class='App-log-spin'>
						<img src={logo}  width="300" style={{"borderRadius": "300px"}} />
					</div>
					<h1>THE SCP FOUNDATION</h1>
				</div>

				<Container className="main-content">
					<Link to="/articles">Accéder à la boutique</Link>
				
					<h2>Qu'est-ce que la fondation SCP?</h2>
					<p>La Fondation SCP est une œuvre de fiction tirée du site d'écriture collaborative du même nom et en cours de rédaction depuis 2007.  </p>
					<p>Elle est centrée sur l'univers de la fondation SCP, une organisation secrète chargée de cacher l'existence des phénomènes surnaturels, appelés « SCP ».</p>
					<p>Le site prend la forme d'un wiki où la communauté publie des textes en suivant les codes de divers genres littéraires apparentés au new weird, tels que l'horreur, la science-fiction ou la fantasy urbaine.  </p>
					<p>
						SCP est un sigle signifiant en Anglais "Special Containment Procedures" et qui se réfère aussi à la devise de la fondation "Secure. Contain. Protect."
						Chaque SCP est désigné par un numéro à trois chiffres ou plus. Le plus connu de tous est sans doute SCP-173 (une statue miniature est disponible dans notre magasin).
					</p>
					<p>
						<a href="http://fondationscp.wikidot.com/" class='lightblue'>En savoir plus</a>						
					</p>
					<p>
						Il existe plusieurs jeux autour de la communauté SCP, dont SCP: Containment Breach.
					</p>
				</Container>

                <Footer />
            </div>
        );
    }
}

export default Accueil;