import styled from 'styled-components';
import Header from '../Header';

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<BodyWrapper>{children}</BodyWrapper>
		</>
	);
}

const BodyWrapper = styled.main`
	min-height: 100%;
	max-width: 84%;
	margin: 0 auto;
`;
