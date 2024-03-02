
import React from 'react';
import { StyledFooter } from './styles';
import { useAppSelector } from '../../hooks';

const Footer: React.FC = () => {
	const theme = useAppSelector((state) => state.theme.value);

	return <StyledFooter theme={theme}>THIS IS THE FOOTER</StyledFooter>;
}

export default Footer;
