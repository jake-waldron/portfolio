import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/constants';

export const ProjectPageWrapper = styled.article`
	min-height: 100%;
	padding-top: 4rem;
	padding-bottom: 200px;
	margin: 0 auto;
	width: 90%;
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	/* align-items: center; */
	/* flex: 1 1 100%; */

	font-size: 1.25rem;

	h1 {
		text-align: center;
		font-size: 3.5rem;
		margin-bottom: 2rem;

		@media (max-width: ${BREAKPOINTS.md}) {
			font-size: 2.5rem;
		}

		@media (max-width: ${BREAKPOINTS.sm}) {
			/* font-size: 1.75rem; */
		}
	}

	h2 {
		font-size: 2.5rem;
		margin-left: -2.5rem;

		/* transform: translateY(-1rem) rotate(-3deg); */

		@media (max-width: ${BREAKPOINTS.md}) {
			margin-left: -1.5rem;
			/* margin-bottom: 0.5rem; */
			/* transform: translateY(-0.25rem) rotate(-3deg); */
			font-size: 1.5rem;
		}
	}

	p {
		padding: 1rem 0;
	}
`;
