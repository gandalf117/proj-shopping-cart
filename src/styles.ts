import styled from 'styled-components';
import { Theme } from 'assets/themes/theme.interface';
// import { devices } from 'assets/themes/breakpoints';

interface ThemeProps {
	theme: Theme;
}

// export const StyledContainer = styled.div`
// 	padding-right: 15%;
// 	@media ${devices.large} {
// 		padding-right: 0;
// 	}
// `;

export const StyledCenterContainer = styled.div`
	margin: 1rem 0;
	display: flex;
	flex-direction: row;
	justify-content: center;
	button {
		margin: 0 0.5rem;
	}
`;

export const StyledButton = styled.button<ThemeProps>`
	width: auto;
	background: ${({ theme }) => (theme.buttonBackground)};
	border: 1px solid ${({ theme }) => (theme.buttonBorderColor)};
	padding: 0.7rem 1.5rem;
	color: white;

	&:hover {
		cursor: pointer;
		background: ${({ theme }) => (theme.buttonBackgroundHover)};
	}
`;

export const StyledInput = styled.div`
	input {
		width: 100%;
		display: inline-block;
		border: 1px solid gray;
		padding: 0.2rem 0.5rem;
		line-height: 1.8rem;
		font-size: 1rem;
		color: black;
	}
`;

export const StyledTextarea = styled.div`
	textarea {
		width: 100%;
		display: inline-block;
		border: 1px solid gray;
		padding: 0.2rem 0.5rem;
		line-height: 1.8rem;
		font-size: 1rem;
		color: black;
	}
`;
