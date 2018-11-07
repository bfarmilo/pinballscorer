import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';

import bing from '../assets/up.ogg';
import buzz from '../assets/buzz.ogg';
import bonus from '../assets/bell.ogg';
import reset from '../assets/reset.ogg';

const scoreOptions = [5, 25, 75, 100, -10, -25];
const bonusLetters = new Set(['p', 'o', 'i', 'n', 't', 's']);
const sounds = {
	bing,
	buzz,
	bonus,
	reset,
	none: null
}

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			score: 0,
			bonus: new Set(),
			newScore: false,
			sound: 'none'
		};
	}

	deBounce = (delay, element) => {
		const resetVal = element === 'sound' ? 'none' : false;
		setTimeout(() => this.setState({ [element]: resetVal }), delay);
	}

	addToScore = (e, points) => {
		const score = this.state.score + points;
		const sound = points > 0 ? 'bing' : 'buzz';
		this.setState({ score, sound, newScore: true });
		this.deBounce(500, 'newScore');
		this.deBounce(points > 0 ? 1000 : 750, 'sound')
	}

	resetScore = e => {
		this.setState({ score: 0, sound: 'reset', bonus: new Set() });
		this.deBounce(2500, 'sound');
	}

	setBonus = (e, letter) => {
		const bonus = this.state.bonus;
		bonus.add(letter);
		this.setState({ bonus, sound: 'bonus' });
		this.deBounce(500, 'sound');
	}

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home
						path="/"
						config={{ bonusConfig: bonusLetters, scoreConfig: scoreOptions }}
						score={this.state.score}
						bonus={this.state.bonus}
						newScore={this.state.newScore}
						sound={sounds[this.state.sound]}
						addToScore={this.addToScore}
						resetScore={this.resetScore}
						setBonus={this.setBonus} />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}
