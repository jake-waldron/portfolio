import styled from 'styled-components';
import { COLORS } from '../styles/constants';

export default function About() {
	return (
		<AboutSection id="about">
			<p>This is where I can talk all about how cool I am.</p>
		</AboutSection>
	);
}

const AboutSection = styled.section`
	height: 500px;
	/* background-color: ${COLORS.light}; */
	background-color: #914747;
	display: flex;
	justify-content: center;
	align-items: center;
`;
