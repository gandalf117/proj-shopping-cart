import styled from 'styled-components';
import { Theme } from '../../assets/themes/theme.interface';

interface ThemeProps {
	theme: Theme;
}

export const StyledFooter = styled.div<ThemeProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	background-color: ${({ theme }) => (theme.footerBackground)};
	padding: 3rem 1rem;
	line-height: 2rem;
	color: ${({ theme }) => (theme.footerColor)};
`;
