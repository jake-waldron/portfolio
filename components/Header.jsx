import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

export default function Header() {
	return (
		<header>
			<StyledNav>
				<StyledH2>Jake Waldron</StyledH2>
				<StyledUl>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/projects">Projects</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</StyledUl>
			</StyledNav>
		</header>
	);
}

const StyledNav = styled.nav`
	background: #000;
	color: #fff;
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledH2 = styled.h2`
	color: #fff;
	margin-left: 100px;
`;

const StyledUl = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-width: 350px;
	margin-right: 100px;

	li {
		list-style: none;
	}

	a {
		color: #fff;
		text-decoration: none;
	}

	a:hover {
		/* text-decoration: underline; */
		padding-bottom: 4px;
		border-bottom: 4px solid #fff;
	}
`;
