import styled from 'styled-components';
import { Theme } from '../../assets/themes/theme.interface';

interface ThemeProps {
	theme: Theme;
}

export const StyledTopMenu = styled.div<ThemeProps>`
	display: flex;
	flex-direction: row;
	align-items: center;
	position: absolute;
	top: 0;
	width: 96%;
	margin: 0.5rem 2%;
	background-color: ${({ theme }) => (theme.topMenuBackground)};
	backdrop-filter: blur(6px);
	padding: 1rem;
	border: 1px solid ${({ theme }) => (theme.topMenuBorderColor)};
	color: ${({ theme }) => (theme.topMenuColor)};
	border-radius: 20px;
	line-height: 2rem;
	.menu-title {
		display: inline-block;
		margin: 0 0.5rem;
	}
	.menu-switch {
		margin-right: 1rem;
		> div {
			display: inline-block;
			margin-right: 0.5rem;
		}
	}
	.menu-link {
		cursor: pointer;
	}
`;

export const StyledMenuLogo = styled.div`
	flex: 1;
`;
