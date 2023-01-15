import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { COLORS, BREAKPOINTS } from '../styles/constants';
import { GrMenu, GrClose } from 'react-icons/gr';

function Hamburger(props) {
	return (
		<div onClick={props.onClick}>
			<GrMenu className="open-icon" />
		</div>
	);
}

function Close(props) {
	return (
		<div onClick={props.onClick}>
			<GrClose className="close-icon" />
		</div>
	);
}

function RegularMenu() {
	return (
		<RegList>
			<li>
				<Link href="/#about">About</Link>
			</li>
			<li>
				<Link href="/#projects">Projects</Link>
			</li>
			<li>
				<Link href="/#contact">Contact</Link>
			</li>
		</RegList>
	);
}

function MobileMenu({ open, toggleMenu }) {
	return (
		<MobileControls>
			{!open && <Hamburger onClick={toggleMenu} />}
			{open && <Close onClick={toggleMenu} />}
			{open && (
				<ul>
					<li>
						<Link href="/#about" onClick={toggleMenu}>
							About
						</Link>
					</li>
					<li>
						<Link href="/#projects" onClick={toggleMenu}>
							Projects
						</Link>
					</li>
					<li>
						<Link href="/#contact" onClick={toggleMenu}>
							Contact
						</Link>
					</li>
				</ul>
			)}
		</MobileControls>
	);
}

const MobileControls = styled.div`
	div:has(svg) {
		position: relative;
		right: 8%;
	}

	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	z-index: 100;

	.open-icon {
		font-size: 2rem;
		path {
			stroke: ${COLORS.light};
		}
	}

	.close-icon {
		font-size: 2rem;
		path {
			stroke: ${COLORS.light};
		}
	}

	ul {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-width: 100%;
		position: absolute;
		top: 100px;
		background-color: ${COLORS.dark};
		color: ${COLORS.light};
		padding: 1rem;
		border-radius: 0 0 8px 8px;
		/* box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); */
		z-index: 100;

		li {
			list-style: none;
			margin-bottom: 1rem;
		}

		a {
			color: inherit;
			text-decoration: none;
			font-size: 1.5rem;
			font-weight: 400;
		}
	}

	@media (min-width: ${BREAKPOINTS.md}) {
		display: none;
	}
`;

export default function Header() {
	const [open, setOpen] = useState(false);

	function toggleMenu() {
		setOpen(!open);
		console.log('toggling menu');
	}

	return (
		<header>
			<StyledNav>
				<h2>
					<Link href="/">Jake Waldron</Link>
				</h2>
				<RegularMenu />
				<MobileMenu open={open} toggleMenu={toggleMenu} />
			</StyledNav>
		</header>
	);
}

const StyledNav = styled.nav`
	/* position: absolute; */
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

		a {
			color: inherit;
			text-decoration: none;
		}

		@media (max-width: ${BREAKPOINTS.lg}) {
			font-size: 1.75rem;
		}
	}

	/* ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 45%;
		flex: 1;
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

		@media (max-width: ${BREAKPOINTS.md}) {
			display: none;
		}
	} */
`;

const RegList = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 45%;
	flex: 1;
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

	@media (max-width: ${BREAKPOINTS.md}) {
		display: none;
	}
`;
