import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/constants';

export default function RamUtilities() {
	return (
		<>
			<Wrapper>
				<Text>
					<h2>This is the Reynolds Advanced Utilities page!</h2>
					<p>What the fuck.</p>
				</Text>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.section`
	/* position: relative; */
	/* margin-top: 100px; */
	/* padding-top: 100px; */
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
	flex: 1 1 100%;
`;

const Text = styled.article`
	height: 100%;
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	/* align-items: center; */
	flex: 1 1 100%;
`;
