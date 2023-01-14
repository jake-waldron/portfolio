import styled from 'styled-components';
import About from '../components/About';
import Contact from '../components/Contact';
import Hello from '../components/Hello';
import Projects from '../components/Projects';

const Heading = styled.h1`
	color: red;
`;

export default function Home() {
	return (
		<>
			<Hello />
			<About />
			<Projects />
			<Contact />
		</>
	);
}
