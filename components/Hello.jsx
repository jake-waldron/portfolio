import styled from 'styled-components';
import useStore from '../utils/viewState';
import { COLORS, BREAKPOINTS } from '../styles/constants';
import { useCallback, useEffect, useRef } from 'react';
import { showAnimation } from '../utils/showAnimation';
import { useInView } from 'framer-motion';

export default function Hello() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.5 });
	const helloSectionViewCount = useStore((state) => state.helloSectionViewCount);
	const increaseHelloSectionViewCount = useStore(useCallback((state) => state.increaseHelloSectionViewCount, []));

	useEffect(() => {
		if (isInView) {
			increaseHelloSectionViewCount();
		}
	}, [isInView, increaseHelloSectionViewCount]);

	return (
		<Wrapper ref={ref}>
			<TextDiv className={showAnimation(helloSectionViewCount, 'fade-in')}>
				<h1>Hey there!</h1>
				<p>I&apos;m Jake.</p>
				<p>I make things.</p>
			</TextDiv>
			<ImageDiv className={showAnimation(helloSectionViewCount, 'fade-in')}>
				<img src="/waveWithText.png" alt="Image of man wearing a mask, smiling and waving" id="wave-img" />
			</ImageDiv>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	height: calc(100vh - 100px);
	/* width: 90%; */
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;

	/* @keyframes fade-in-shift-up {
		from {
			opacity: 0;
			transform: translateY(15px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	} */

	@media (max-width: ${BREAKPOINTS.lg}) {
		flex-direction: column;
		flex: 1;
	}

	@media (max-width: ${BREAKPOINTS.sm}) {
		/* height: 75vh; */
	}
`;

const TextDiv = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* flex: 1.5 0 50%; */
	flex-grow: 2;
	flex-shrink: 1;
	flex-basis: 60%;

	font-size: 3.5rem;

	/* opacity: 0;
	animation: fade-in-shift-up 0.4s ease-in forwards;
	animation-delay: 0.1s; */

	/* opacity: 0; */

	&.fade-in {
		opacity: 1;
	}

	&.fade-in-animate {
		opacity: 0;
		animation: fade-in-shift-up 0.3s ease-in-out forwards;
		animation-delay: 0.1s;
	}

	h1 {
		font-weight: 600;
	}

	p {
		margin-left: 50px;
		font-weight: 300;
	}

	@media (max-width: ${BREAKPOINTS.lg}) {
		/* margin-top: 150px; */
		align-self: flex-start;
		/* margin-left: 10%; */
	}

	@media (max-width: ${BREAKPOINTS.md}) {
		font-size: 2.5rem;
		/* margin-left: 0; */
	}

	@media (max-width: ${BREAKPOINTS.sm}) {
		@media (max-height: 700px) {
			font-size: 2rem;
		}
	}
`;

const ImageDiv = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: end;
	/* flex-shrink: 1; */
	flex: 1 2 100%;

	&.animation-setup {
		opacity: 0;
	}

	&.fade-in {
		opacity: 1;
	}

	&.fade-in-animate {
		opacity: 0;
		animation: fade-in-shift-up 0.3s ease-in-out forwards;
		animation-delay: 0.2s;
	}

	div {
		height: 100%;
		max-width: 100%;
		position: relative;
	}

	img {
		max-width: 100%;
		max-height: 80vh;
		filter: drop-shadow(10px 10px 10px hsla(0, 0%, 10%, 0.3));
	}

	@media (max-width: ${BREAKPOINTS.lg}) {
		height: auto;
	}

	@media (max-width: ${BREAKPOINTS.sm}) {
		flex-shrink: 1;
	}
`;
