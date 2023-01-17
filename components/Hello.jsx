import styled from 'styled-components';
import { COLORS, BREAKPOINTS } from '../styles/constants';

export default function Hello() {
	return (
		<Wrapper>
			<TextDiv>
				<h1>Hey there!</h1>
				<p>I&apos;m Jake.</p>
				<p>I make things.</p>
			</TextDiv>
			<ImageDiv>
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
