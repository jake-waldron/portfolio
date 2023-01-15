import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/constants';

export const ProjectPageWrapper = styled.article`
	min-height: 100%;
	padding-top: 4rem;
	margin: 0 auto;
	width: 100%;
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	/* align-items: center; */
	flex: 1 1 100%;

	h1 {
		text-align: center;
		font-size: 3.5rem;
		margin-bottom: 2rem;

		@media (max-width: ${BREAKPOINTS.md}) {
			font-size: 2.5rem;
		}

		@media (max-width: ${BREAKPOINTS.sm}) {
			font-size: 1.5rem;
		}
	}
`;
