import styled from 'styled-components';

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	overflow: auto;
	background: white;
	padding-top: 6rem;
`;

export const StyledHomeWrapper = styled.div`
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
