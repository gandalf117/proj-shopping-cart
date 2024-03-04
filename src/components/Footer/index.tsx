
import React from 'react';
import { StyledFooter } from './styles';
import { useAppSelector } from 'hooks';

const Footer: React.FC = () => {
	const theme = useAppSelector((state) => state.theme.value);

	return <StyledFooter theme={theme}>&#169; Kiril Stoev - egt - shopping cart project</StyledFooter>;
}

export default Footer;
