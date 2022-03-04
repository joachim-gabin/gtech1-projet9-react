import React, { Component } from 'react';

import MenuBar from './components/MenuBar';
import Footer from './components/Footer';

import logo from './logo.jpg';
import logo2 from './img/logo_scp_blanc.png'
import ethan from './img/ethan-173.png'
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';


class Accueil extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<MenuBar articles={this.props.cart}/>

				<div className="App-header">
					<div class='App-log-spin'>
						<img src={logo} width="300" style={{"borderRadius": "300px"}} />
					</div>
					<div class='App-log-spin-reverse'>
						<img src={logo2} width="1500" style={{"borderRadius": "1500px"}} />
					</div>
					<h1 className='text-center'>THE SCP FOUNDATION<br/>SHOP</h1>
				</div>

				<Container className="main-content" style={{"padding": "60px", "background": "#404040", "marginTop": "100vh", "marginBottom": "100px"}}>
					<div className="text-center mb-5">
						<Link to="/articles">
							<Button size="lg">Accéder à la boutique</Button>
						</Link>
					</div>
				
					<h2>Qu'est-ce que la fondation SCP?</h2>
					<p>La Fondation SCP est une œuvre de fiction tirée du site d'écriture collaborative du même nom et en cours de rédaction depuis 2007.</p>
					<p>Elle est centrée sur l'univers de la fondation SCP, une organisation secrète chargée de cacher l'existence des phénomènes surnaturels, appelés « SCP ».</p>
					<p>Le site prend la forme d'un wiki où la communauté publie des textes en suivant les codes de divers genres littéraires apparentés au new weird, tels que l'horreur, la science-fiction ou la fantasy urbaine.</p>
					<p>
						SCP est un sigle signifiant en Anglais "Special Containment Procedures" et qui se réfère aussi à la devise de la fondation "Secure. Contain. Protect."
						Chaque SCP est désigné par un numéro à trois chiffres ou plus. Le plus connu de tous est sans doute SCP-173 (une statue miniature est disponible dans notre magasin).
					</p>
					<p>
						<a href="http://fondationscp.wikidot.com/" className='lightblue' target="blank" rel="nofollow">En savoir plus</a>						
					</p>
					<p>
						Il existe plusieurs jeux autour de la communauté SCP, dont SCP: Containment Breach.
					</p>
				</Container>



				<div style={{position: "relative", top: "0", left: "0", width: "100%", height: "100%"}} onClick={() =>
					{
						let ethan = document.getElementById("ethan-wrapper");
						let c = ethan.cloneNode(true);
						ethan.parentNode.replaceChild(c, ethan);
						c.classList.add("ejump-anim");
					}}
				>

					<div id="ethan-wrapper" style={{position: "absolute", bottom: "-64px", right: "100px", width: "auto", height: "50px", overflow: "hidden"}}>
						<img src={ethan} />
					</div>
				</div>

				<Footer />
			</>
		);
	}
}

export default Accueil;