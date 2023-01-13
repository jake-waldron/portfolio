import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

export default function Header() {
	return (
		<StyledHeader>
			<h2>Jake Waldron</h2>
			<StyledNav>
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/projects">Projects</Link>
				<Link href="/contact">Contact</Link>
			</StyledNav>
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	background: #000;
	color: #fff;
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 25%;
	margin-right: 100px;

	a {
		color: #fff;
		text-decoration: none;
	}
`;
