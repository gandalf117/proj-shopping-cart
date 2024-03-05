import styled from 'styled-components';
import { devices } from 'assets/themes/breakpoints';

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	overflow: auto;
	background: white;
	padding-top: 6rem;
`;

export const StyledCartWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	flex: 1;
	padding: 1rem;
	width: 70%;
	margin: 0 auto 2rem auto;
	background: whitesmoke;
	border: 1px solid gainsboro;
	border-radius: 10px;

	@media ${devices.medium} {
		width: 70%;
	}

	@media ${devices.small} {
		width: 90%;
	}
`;
