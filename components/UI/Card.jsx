import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

export default function Card(props) {
	return (
		<StyledCard>
			<h3>{props.title}</h3>
			{props.img ? <img src={props.img} alt={props.imgAlt} /> : <Placeholder />}
			<p>{props.description}</p>
			<Link href="/">More Info</Link>
		</StyledCard>
	);
}

const StyledCard = styled.div`
	max-width: 350px;
	padding: 16px 32px;
	border-radius: 16px;
	box-shadow: 0 0 28px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	p {
		justify-self: center;
	}

	a {
		text-decoration: none;
		font-weight: bold;
		color: inherit;
		margin-top: 16px;
	}

	:hover {
		cursor: pointer;
		/* transform: scale(1.05); */
		transform-origin: center center;
		transition: transform 0.25s ease-in-out;

		a {
			text-decoration: underline;
			/* font-size: 1.25rem; */
		}
	}
`;

const Placeholder = styled.div`
	background-color: #ccc;
	width: 100%;
	height: 100px;
	margin: 16px 0;
`;
