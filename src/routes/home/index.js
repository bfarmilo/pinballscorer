import { h } from 'preact';
import style from './style';
import Circle from './circle';

const Home = props => {
	const testArray = (new Array(props.extraBallLit)).fill(1);
	console.log(testArray);
	return (
		<div class={style.home}>
			<div class={style.controlArea}>
				<div style={{ display: 'grid', gridTemplateColumns: '4fr 1fr' }}>
					<div class={props.newScore ? style.newScore : style.score}>{props.score}</div>
					<div style={{ display: 'grid', gridTemplateRows: '1fr 1fr' }}>
						<div>
							<div>Extra Ball</div>
							<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>{testArray.map((item, index) => <Circle key={index} width='30px' height='30px' color='yellow'></Circle>)}</div>
						</div>
						<div style={{ display: 'flex', justifyContent: 'center', fontSize: '40px', fontFamily: '"Press Start 2P"' }}>{4 - props.ballNumber}</div>
					</div>
				</div>
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
				<div class={style.resetButton} style={props.ballNumber === 1 && props.extraBallLit === 0 ? { backgroundColor: 'purple' } : {}} onClick={e => props.resetScore(e, this.audio)}>{props.ballNumber == 1 && props.extraBallLit === 0 ? 'New Game' : 'Shoot Again'}</div>
			</div>
		</div >
	);
}

export default Home;
