import Link from 'next/link';
import styled from 'styled-components';
import { COLORS, BREAKPOINTS } from '../styles/constants';

export default function Header() {
	return (
		<header>
			<StyledNav>
				<h2>Jake Waldron</h2>
				<ul>
					{/* <li>
						<Link href="/">Home</Link>
					</li> */}
					<li>
						<Link href="/#about">About</Link>
					</li>
					<li>
						<Link href="/#projects">Projects</Link>
					</li>
					<li>
						<Link href="/#contact">Contact</Link>
					</li>
				</ul>
			</StyledNav>
		</header>
	);
}

const StyledNav = styled.nav`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100px;
	background-color: ${COLORS.dark};
	color: ${COLORS.light};
	/* padding: 1rem; */
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 100;

	h2 {
		color: inherit;
		font-size: 2rem;
		font-weight: 600;
		/* margin-left: 100px; */
		margin-left: 8%;

		@media (max-width: ${BREAKPOINTS.lg}) {
			font-size: 1.75rem;
		}
	}

	ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* min-width: 500px; */
		max-width: 45%;
		flex: 1;
		/* max-width: 50%; */
		margin-right: 8%;

		li {
			list-style: none;
		}

		a {
			position: relative;
			color: inherit;
			text-decoration: none;
			font-size: 1.5rem;
			font-weight: 400;
		}

		a:before {
			content: '';
			display: block;
			position: absolute;
			height: 4px;
			width: 100%;
			bottom: -8px;
			left: 0;
			background-color: ${COLORS.highlight};
			transform: scaleX(0);
			transition: transform 150ms ease-in-out;
		}

		a:hover:before {
			transform: scaleX(1);
		}

		/* a:hover {
			/* text-decoration: underline; */
		/* padding-bottom: 4px; */
		/* border-bottom: 4px solid ${COLORS.highlight};  */

		@media (max-width: ${BREAKPOINTS.md}) {
			display: none;
		}
	}
`;
