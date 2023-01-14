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
	/* width: auto; */
	/* height: auto; */
	/* background-color: white; */
	padding: 16px;
	border-radius: 16px;
	box-shadow: 0 0 28px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	p {
		justify-self: center;
		margin: 0 16px;
		margin-top: 16px;
	}

	a {
		text-decoration: none;
		font-weight: bold;
		color: inherit;
		margin-top: 16px;
	}

	:hover {
		cursor: pointer;
		transform: scale(1.1);

		a {
			text-decoration: underline;
		}
	}
`;

const Placeholder = styled.div`
	background-color: #ccc;
	width: 200px;
	height: 100px;
`;
