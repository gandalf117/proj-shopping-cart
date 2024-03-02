import styled from 'styled-components';
import colors from 'assets/themes/colors';
import { devices } from 'assets/themes/breakpoints';

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	overflow: auto;
	background: ${colors.theme.container};
	padding-top: 6rem;
`;

export const StyledMainWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	flex: 1;
`;

export const StyledMainContent = styled.div`
	width: 80%;
	padding: 0 1rem;
	display: flex;
	flex-direction: column;

	@media ${devices.large} {
		width: 75%;
	}

	@media ${devices.medium} {
		width: 60%;
	}

	@media ${devices.small} {
		width: 100%;
		padding: 1rem 0;
	}
`;

export const StyledLink = styled.div`
	margin-top: 0.5rem;
	a,
	a:visited {
		color: white;
		text-decoration: none;
	}
	a:hover {
		font-weight: bold;
	}
`;
