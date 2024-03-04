import styled from 'styled-components';
import { Theme } from 'assets/themes/theme.interface';

interface ThemeProps {
	theme: Theme;
}

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
	color: ${({ theme }) => (theme.buttonColor)};

	&:hover {
		cursor: pointer;
		background: ${({ theme }) => (theme.buttonBackgroundHover)};
	}
`;
