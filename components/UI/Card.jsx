import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useRouter } from 'next/router';

export default function Card(props) {
	const router = useRouter();
	function handleClick() {
		// navigate to props.url
		console.log('go to project page!');
		router.push(`/projects/${props.slug}`);
	}

	return (
		<StyledCard whileHover={{ scale: 1.1 }} onClick={handleClick}>
			<h3>{props.title}</h3>
			{props.img ? <img src={props.img} alt={props.imgAlt} /> : <Placeholder />}
			<p>{props.description}</p>
			<span>More Info</span>
		</StyledCard>
	);
}

const StyledCard = styled(motion.button)`
	max-width: 350px;
	padding: 16px 32px;
	border-radius: 16px;
	border: 0;
	box-shadow: 0 0 28px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1 1 0px;

	img {
		/* width: 100%; */
		/* height: 100%; */
		/* object-fit: cover; */
		border-radius: 16px;
		margin: 16px 0;
		/* box-shadow: 0 0 28px rgba(0, 0, 0, 0.2); */
		border: 1px solid #000;
	}

	p {
		justify-self: center;
	}

	span {
		text-decoration: none;
		font-weight: bold;
		color: inherit;
		margin-top: 16px;
	}

	:hover {
		cursor: pointer;
		/* transform: scale(1.05); */

		span {
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
