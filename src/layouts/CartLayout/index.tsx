import React from 'react';

import TopMenu from 'components/TopMenu';
import Footer from 'components/Footer';

import {
  StyledContainer,
  StyledCartWrapper,
} from './styles';

interface CartLayoutProps {
  children: React.ReactNode;
}

const CartLayout: React.FC<CartLayoutProps> = ({ children }) => {
  return (
    <StyledContainer>
      <TopMenu />
      <StyledCartWrapper>
        {children}
      </StyledCartWrapper>
      <Footer />
    </StyledContainer>
  );
};

export default CartLayout;