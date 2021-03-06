import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<h1>Pinball Scorekeeper</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Show Score</Link>
{/* 			<Link activeClassName={style.active} href="/profile">Me</Link>
			<Link activeClassName={style.active} href="/profile/john">John</Link> */}
		</nav>
	</header>
);

export default Header;
