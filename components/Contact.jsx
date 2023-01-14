import styled from 'styled-components';
import { COLORS } from '../styles/constants';

export default function Contact() {
	return (
		<Wrapper id="contact">
			<p>Add a contact section.</p>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
	height: 500px;
	/* background-color: ${COLORS.light}; */
	background-color: #914747;
	display: flex;
	justify-content: center;
	align-items: center;
`;
