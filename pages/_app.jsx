import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import '../styles/globals.css';
import { COLORS } from '../styles/constants';
import { createContext, memo, useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${COLORS.light};
		color: ${COLORS.dark};
	}
`;

export const Context = createContext();

export default function App({ Component, pageProps }) {
	const highlightRef = useRef(null);
	const [highlightViewed, setHighlightViewed] = useState(false);
	const highlightIsInView = useInView(highlightRef, { once: true, amount: 1 });

	useEffect(() => {
		if (highlightIsInView && !highlightViewed) {
			setHighlightViewed(true);
		}
	}, [highlightIsInView, highlightViewed]);

	// setHighlightIsInView(useInView(highlightRef, { once: true, amount: 1 }));

	const contextValues = {
		highlightRef,
		highlightViewed,
	};

	return (
		<>
			<Head>
				<title>Jake Waldron</title>
				<meta name="description" content="Jake Waldron's portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<GlobalStyle />
			<Context.Provider value={contextValues}>
				<Component {...pageProps} />
			</Context.Provider>
		</>
	);
}
