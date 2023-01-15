import styled from 'styled-components';
import { useInView } from 'framer-motion';
import { COLORS, BREAKPOINTS } from '../styles/constants';
import Card from './UI/Card';
import { useRef } from 'react';

export default function Projects() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 1 });
	return (
		<Wrapper id="projects">
			<Heading ref={ref}>
				<h2>
					<span className={isInView ? 'highlight' : ''}>Highlighted Projects</span>
				</h2>
				<p className={isInView ? 'fade-in' : ''}>-because who needs to see more tutorials?</p>
			</Heading>
			<ProjectCards>
				<Card
					title="Reynolds Advanced Utilities"
					description="Full-stack app that took a task from a couple hours to under thirty minutes."
					img="ram_utilities_thumb.png"
					slug="ram-utilities"
				/>
				<Card
					title="Add to Truck Bookmarklets"
					description="An exercise in reducing complexity."
					img="/add_to_truck_thumb.png"
					slug="bookmarklets"
				/>
				<Card
					title="Maker Monster Mask"
					description="It's not web development, but it's pretty cool."
					img="mask_thumb.png"
					slug="maker-monster-mask"
				/>
			</ProjectCards>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	margin-top: 40px;
	margin-bottom: 80px;
	background-color: ${COLORS.light};
	/* background-color: #914747; */
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const Heading = styled.div`
	padding: 40px;
	isolation: isolate;
	align-self: flex-start;
	/* flex: 1 1 50%; */

	h2 {
		font-weight: bold;
		font-size: 3rem;
		z-index: 1;
	}

	p {
		font-weight: 300;
		font-size: 1.5rem;
		font-style: italic;
		margin-left: 20px;
		opacity: 0;

		@media (min-width: ${BREAKPOINTS.md}) {
			font-size: 2rem;
			margin-left: 40px;
		}
	}

	.highlight {
		position: relative;
	}

	.highlight::before {
		position: absolute;
		content: '';
		height: 100%;
		left: -25px;
		top: -2px;
		z-index: -1;
		border-radius: 1em 0.51em 1em 0.2em;
		background-image: linear-gradient(
			-120deg,
			hsl(75, 75%, 74%, 0.4),
			hsla(124, 100%, 74%, 0.7) 95%,
			hsla(124, 100%, 74%, 0.1)
		);
		transform: rotate(-0.5deg);
		animation: fade-in 0.3s ease-in forwards;
		animation: grow-from-left-wide 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards;
		animation-delay: 0.5s;

		@media (min-width: ${BREAKPOINTS.md}) {
			animation: grow-from-left 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards;
		}
	}

	.fade-in {
		opacity: 0;
		animation: fade-in-shift-right 0.4s ease-in-out forwards;
		animation-delay: 0.4s;
	}

	/* ANIMATIONS */

	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes fade-in-shift-right {
		from {
			opacity: 0;
			transform: translateX(-15px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes grow-from-left {
		from {
			width: 0%;
		}
		to {
			width: calc(100% + 50px);
		}
	}

	@keyframes grow-from-left-wide {
		from {
			width: 0%;
		}
		to {
			width: calc(100% + 130px);
		}
	}
`;

const ProjectCards = styled.div`
	align-self: center;
	display: flex;
	flex-direction: row;
	/* flex-wrap: wrap; */
	justify-content: space-between;
	align-items: stretch;
	gap: 40px;
	margin: 0 40px;
	/* flex: 1 1 50%; */

	@media (max-width: ${BREAKPOINTS.lg}) {
		flex-direction: column;
	}
`;
