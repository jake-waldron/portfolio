import styled from 'styled-components';
import { useInView } from 'framer-motion';
import { COLORS, BREAKPOINTS } from '../styles/constants';
import Card from './UI/Card';
import { useCallback, useEffect, useRef } from 'react';
import useStore from '../utils/viewState';
import { showAnimation } from '../utils/showAnimation';

const projectArray = [
	{
		id: 1,
		title: 'Reynolds Advanced Utilities',
		description: 'Full-stack app that took a task from a couple hours to under thirty minutes.',
		tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
		img: 'ram_utilities_thumb.png',
		slug: 'ram-utilities',
	},
	{
		id: 2,
		title: 'Add to Truck Bookmarklets',
		description: 'An exercise in reducing complexity.',
		tech: ['JavaScript', 'Notion API', 'AWS Lambda', 'AWS API Gateway'],
		img: '/add_to_truck_thumb.png',
		slug: 'bookmarklets',
	},
	{
		id: 3,
		title: 'Maker Monster Mask',
		description: "It's not web development, but it's pretty cool.",
		tech: ['Arduino', 'Bluetooth', 'C++', 'Fusion 360', '3D Printing'],
		img: 'mask_thumb.png',
		slug: 'maker-monster-mask',
	},
];

export default function Projects() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.5 });
	const projectSectionViewCount = useStore((state) => state.projectSectionViewCount);
	const increaseProjectSectionViewCount = useStore(useCallback((state) => state.increaseProjectSectionViewCount, []));

	useEffect(() => {
		if (isInView) {
			increaseProjectSectionViewCount();
		}
	}, [isInView, increaseProjectSectionViewCount]);

	// function showAnimation(baseName) {
	// 	if (projectSectionViewCount < 1) {
	// 		return '';
	// 	}
	// 	if (projectSectionViewCount === 1) {
	// 		return `${baseName}-animate`;
	// 	}
	// 	if (projectSectionViewCount > 1) {
	// 		return `${baseName}`;
	// 	}
	// }

	return (
		<Wrapper id="projects" className={showAnimation(projectSectionViewCount, 'section-fade-in')}>
			<Heading ref={ref}>
				<h2>
					<span className={showAnimation(projectSectionViewCount, 'highlight')}>Highlighted Projects</span>
				</h2>
				<p className={showAnimation(projectSectionViewCount, 'fade-in')}>-because who needs to see more tutorials?</p>
			</Heading>
			<ProjectCards className={showAnimation(projectSectionViewCount, 'cards-fade-in')}>
				{projectArray.map((project) => (
					<Card
						key={project.id}
						title={project.title}
						description={project.description}
						tech={project.tech}
						img={project.img}
						slug={project.slug}
					/>
				))}
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

	&.animation-setup {
		opacity: 0;
	}

	&.section-fade-in {
		opacity: 1;
	}

	&.section-fade-in-animate {
		opacity: 0;
		animation: fade-in-shift-up 0.3s ease-in-out forwards;
		animation-delay: 0.1s;
	}

	@media (max-width: ${BREAKPOINTS.sm}) {
		padding-top: 40px;
	}
`;

const Heading = styled.div`
	padding: 16px;
	isolation: isolate;
	align-self: flex-start;
	/* flex: 1 1 50%; */

	@media (min-width: ${BREAKPOINTS.md}) {
		padding: 40px;
	}

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

		&.animation-setup {
			opacity: 0;
		}

		@media (min-width: ${BREAKPOINTS.md}) {
			font-size: 2rem;
			margin-left: 40px;
		}
	}

	.highlight,
	.highlight-animate {
		position: relative;
	}
	/* 
	.highlight-animate {
		animation-delay: 2s;
	} */

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
		opacity: 1;
		width: calc(100% + 130px);

		@media (min-width: ${BREAKPOINTS.md}) {
			width: calc(100% + 50px);
		}
	}

	.highlight-animate::before {
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
		animation-delay: 0.4s;

		@media (min-width: ${BREAKPOINTS.md}) {
			animation: grow-from-left 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards;
			animation-delay: 0.4s;
		}
	}

	&.animation.setup {
		opacity: 0;
	}

	.fade-in {
		opacity: 1;
	}

	.fade-in-animate {
		opacity: 0;
		animation: fade-in-shift-right 0.5s ease-in-out forwards;
		animation-delay: 0.5s;
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
	/* align-self: center; */
	display: flex;
	flex-direction: row;
	/* flex-wrap: wrap; */
	justify-content: space-between;
	align-items: stretch;
	gap: 40px;
	margin: 0 40px;
	/* flex: 1 1 50%; */

	&.animation-setup {
		opacity: 0;
	}

	&.cards-fade-in {
		opacity: 1;
	}

	&.cards-fade-in-animate {
		opacity: 0;
		animation: fade-in-shift-up 0.3s ease-in-out forwards;
		animation-delay: 0.5s;
	}

	@media (min-width: ${BREAKPOINTS.lg}) {
		// uncomment this if you decide to go with a column in wide view
		/* width: 75%;
		flex-direction: column; */
	}

	@media (max-width: ${BREAKPOINTS.lg}) {
		/* width: 100%; */
		flex-direction: column;
	}
`;
