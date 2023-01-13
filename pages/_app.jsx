import Head from 'next/head';
import Header from '../components/Header';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Jake Waldron</title>
				<meta name="description" content="Jake Waldron's portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Component {...pageProps} />
		</>
	);
}
