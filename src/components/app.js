import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';

import bing from '../assets/sounds/33299__erlingx__spring.mp4';
import buzz from '../assets/sounds/33294__erlingx__goingdown.mp4';
import bonus from '../assets/sounds/33295__erlingx__idiidi.mp4';
import reset from '../assets/sounds/33278__erlingx__1gear.mp4';

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
			newScore: false
		};
	}

	playSound = sound => {
		if (this.audio) {
			this.audio.src = sounds[sound];
			this.audio.play();
		} else {
			console.error('no audio tag found');
		}
	}

	addToScore = (e, points) => {
		const score = this.state.score + points;
		const sound = points > 0 ? 'bing' : 'buzz';
		this.playSound(sound);
		this.setState({ score, newScore: true });
		setTimeout(() => this.setState({ newScore: false }), 500);
	}

	resetScore = e => {
		this.playSound('reset');
		this.setState({ score: 0, bonus: new Set() });
	}

	setBonus = (e, letter) => {
		const bonus = this.state.bonus;
		if (!bonus.has(letter)) this.playSound('bonus');
		bonus.add(letter);
		this.setState({ bonus });
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
				<audio ref={c => this.audio = c} />
				<Header />
				<Router onChange={this.handleRoute}>
					<Home
						path="/"
						config={{ bonusConfig: bonusLetters, scoreConfig: scoreOptions }}
						score={this.state.score}
						bonus={this.state.bonus}
						newScore={this.state.newScore}
						addToScore={this.addToScore}
						resetScore={this.resetScore}
						setBonus={this.setBonus}
					/>
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}
