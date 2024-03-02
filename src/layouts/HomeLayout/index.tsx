import React from 'react';

import TopMenu from 'components/TopMenu';
import Footer from 'components/Footer';

import {
  StyledContainer,
  StyledHomeWrapper,
  StyledMainContent,
} from './styles';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <StyledContainer>
      <TopMenu />
      <StyledHomeWrapper>
        <StyledMainContent>{children}</StyledMainContent>
      </StyledHomeWrapper>
      <Footer />
    </StyledContainer>
  );
};

export default HomeLayout;