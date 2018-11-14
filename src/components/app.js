import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';

import bing from '../assets/sounds/220173_4100837-lq.mp3';
import buzz from '../assets/sounds/33294_185990-lq.mp3';
import bonus from '../assets/sounds/337049_3232293-lq.mp3';
import reset from '../assets/sounds/33278_185990-lq.mp3';

const sounds = {
	good: { url: bing, volume: 0.8 },
	bad: { url: buzz, volume: 0.6 },
	bonus: { url: bonus, volume: 0.8 },
	reset: { url: reset, volume: 0.5 },
	none: { url: null, volume: 0 }
}

const extraStyle = {
	0: { width: '30px', height: '30px', borderRadius: '40px', backgroundColor: 'white' },
	1: { width: '30px', height: '30px', borderRadius: '40px', backgroundColor: 'yellow' },
	2: { width: '30px', height: '30px', borderRadius: '40px', backgroundColor: 'green' }
}

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scoreOptions: [5, 25, 75, 100, -10, -25],
			bonusLetters: new Set(['p', 'o', 'i', 'n', 't', 's']),
			extraBall: 0,
			extraFromScore: false,
			score: 0,
			ball: 3,
			bonus: new Set(),
			newScore: false
		};
	}

	playSound = sound => {
		if (this.audio) {
			this.audio.src = sounds[sound].url;
			this.audio.volume = sounds[sound].volume;
			this.audio.play();
		} else {
			console.error('no audio tag found');
		}
	}

	addToScore = (e, points) => {
		const score = this.state.score + points;
		const sound = points > 0 ? 'good' : 'bad';
		const extraFromScore = this.state.extraFromScore;
		if (extraFromScore === false && score > 500 && this.state.extraBall < 2) {
			this.setState({ extraFromScore: true, extraBall: this.state.extraBall + 1 });
		};
		this.playSound(sound);
		this.setState({ score, newScore: true });
		setTimeout(() => this.setState({ newScore: false }), 500);
	}

	resetScore = e => {
		this.playSound('reset');
		if (this.state.extraBall == 0) {
			if (this.state.ball < 2) {
				this.setState({ score: 0, bonus: new Set(), ball: 3, extraBall: 0, extraFromScore: false })
			} else {
				this.setState({ ball: this.state.ball - 1 });
			}
		} else {
			this.setState({ extraBall: this.state.extraBall - 1 })
		}
	}

	setBonus = (e, letter) => {
		const bonus = this.state.bonus;
		let score = this.state.score;

		if (!bonus.has(letter)) {
			this.playSound('bonus');
			bonus.add(letter);
			switch (bonus.size) {
				case 0: break;
				case 1: score += 5; break; //5 points for 1 letter
				case 2: score += (20 - 5); break; //10 points for each letter - the 5 from having one letter
				case 3: score += (45 - 20); break; //15 points for each letter - the 20 from having 2 letters
				case 4: score += (80 - 45); break; // 20 * letter - 3 letter bonus
				case 5: score += (125 - 80); break; //25 * letter - 4 letter bonus
				case 6: {
					score += (180 - 125); //30 * letter - 5 letter bonus 
					break;
				}
			}
		}
		this.setState({ bonus, score });
		if (bonus.size == 6) {
			if (this.state.extraBall < 2) this.setState({ extraBall: this.state.extraBall + 1 });
			[0, 1, 2, 3, 4, 5].map(delay => setTimeout(() => this.setState({ bonus: (delay % 2 === 0) ? bonus : new Set() }), delay * 250 + 500))
		}
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
						config={{ bonusConfig: this.state.bonusLetters, scoreConfig: this.state.scoreOptions }}
						score={this.state.score}
						bonus={this.state.bonus}
						newScore={this.state.newScore}
						addToScore={this.addToScore}
						resetScore={this.resetScore}
						setBonus={this.setBonus}
						extraBallLit={this.state.extraBall}
						extra={extraStyle}
						ballNumber={this.state.ball}
					/>
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}
