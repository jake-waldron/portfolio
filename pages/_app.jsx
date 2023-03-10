import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { createGlobalStyle } from 'styled-components';
import '../styles/globals.css';
import { COLORS } from '../styles/constants';

const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${COLORS.light};
		color: ${COLORS.dark};
	}
`;

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Jake Waldron</title>
				<meta name="description" content="Jake Waldron's portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
			<Analytics />
		</>
	);
}
