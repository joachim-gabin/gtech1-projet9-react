import React, { Component } from 'react';

import MenuBar from './components/MenuBar';
import Footer from './components/Footer';
import ArticleBox from './components/ArticleBox';

import logo from './logo.jpg';

const getUsers = async () => {
	const reponse = await fetch("http://localhost:1337/api/articles", {method: "GET", headers: {"Accept": "application/json", "Content-Type": "application/json"}});
	const users = await reponse.json();
	return users["data"];
}

class Accueil extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			articles: []
		}
	}

	async componentDidMount() {
		const articles = await getUsers();
		this.setState({articles: articles});
	}

    render() {
        return (
            <div>
                <MenuBar />

				<p>
					{JSON.stringify(this.state.articles, undefined, 4)}
				</p>
				{
					this.state.articles.map((u, i) => {
						return <ArticleBox key={u.id} name={u.attributes.name} price={u.attributes.price} />
					})
				}

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