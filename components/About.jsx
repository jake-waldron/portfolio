import styled from 'styled-components';
import { COLORS } from '../styles/constants';

export default function About() {
	return (
		<AboutSection>
			<p>This is where I can talk all about how cool I am.</p>
		</AboutSection>
	);
}

const AboutSection = styled.section`
	max-width: 75%;
	height: 500px;
	margin: 0 auto;
	background-color: ${COLORS.light};
	color: ${COLORS.dark};
	display: flex;
	justify-content: center;
	align-items: center;
`;
