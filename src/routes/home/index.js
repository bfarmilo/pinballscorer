import { h } from 'preact';
import style from './style';

const Home = props => (
	<div class={style.home}>
		<div class={style.controlArea}>
			<div class={props.newScore ? style.newScore : style.score}>{props.score}</div>
			<div class={style.buttonArea} style={{ gridTemplateColumns: props.config.scoreConfig.map(score => `1fr`).join(' ') }}>
				{props.config.scoreConfig.map(score => (
					<div class={style.pointButton} key={score} onClick={e => props.addToScore(e, score, this.audio)}>
						{score}
					</div>
				))}
			</div>
			<div class={style.bonusArea} style={{ gridTemplateColumns: Array.from(props.config.bonusConfig).map(letter => `1fr`).join(' ') }}>
				{Array.from(props.config.bonusConfig).map(letter => (
					<div class={props.bonus.has(letter) ? style.highlight : style.bonusButton} key={letter} onClick={e => props.setBonus(e, letter, this.audio)}>
						{letter}
					</div>
				))}
			</div>
			<div class={style.resetButton} onClick={e => props.resetScore(e, this.audio)}>Reset</div>
		</div>
	</div >
);

export default Home;
