import styled from 'styled-components';
import { Theme } from '../../assets/themes/theme.interface';
import { devices } from 'assets/themes/breakpoints';

interface ThemeProps {
	theme: Theme;
}

export const StyledTopMenu = styled.div<ThemeProps>`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
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
	z-index: 999;
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

	@media ${devices.small} {
		.menu-title {
			display: none;
		}
	}
`;

export const StyledMenuLogo = styled.div`
	flex: 1;
`;
