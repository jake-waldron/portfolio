import About from '../components/About';
import Contact from '../components/Contact';
import Hello from '../components/Hello';
import Projects from '../components/Projects';
import Layout from '../components/UI/Layout';

export default function Home() {
	return (
		<>
			<Layout>
				<Hello />
				<Projects />
				<About />
				<Contact />
			</Layout>
		</>
	);
}
