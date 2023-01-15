import styled from 'styled-components';

export default function Mask() {
	return (
		<Wrapper>
			<h2>This is the Maker Monster Mask page!</h2>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1 1 100%;
`;

const Text = styled.article`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1 1 100%;
`;
