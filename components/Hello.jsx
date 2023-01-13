import styled from 'styled-components';
import { COLORS } from '../styles/constants';

export default function Hello() {
	return (
		<HelloSection>
			<TextDiv>
				<h2>Hey there!</h2>
				<p>I&apos;m Jake.</p>
				<p>I make things.</p>
			</TextDiv>
			<SpacingDiv>
				<img src="/wave.png" alt="Image of man wearing a mask, smiling and waving" />
			</SpacingDiv>
		</HelloSection>
	);
}

const HelloSection = styled.section`
	max-width: 80%;
	margin: 0 auto;
	background-color: ${COLORS.light};
	color: ${COLORS.dark};
	display: flex;
	justify-content: space-between;
	align-items: center;

	font-size: 2.5rem;

	@media (max-width: 1280px) {
		font-size: 2rem;
		flex-direction: column;
	}
`;

const TextDiv = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: 1280px) {
		margin: 50px 0;
	}
`;

const SpacingDiv = styled.div`
	height: calc(100vh - 100px);
	display: flex;
	flex-direction: column;
	justify-content: end;

	@media (max-width: 1280px) {
		height: 100%;
	}

	img {
		max-width: 100%;
		/* height: 80vh; */
	}
`;
