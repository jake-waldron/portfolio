import styled from 'styled-components';
import About from '../components/About';
import Hello from '../components/Hello';

const Heading = styled.h1`
	color: red;
`;

export default function Home() {
	return (
		<>
			<Hello />
			<About />
		</>
	);
}
