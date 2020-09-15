import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { FixedBar } from '../components';
import { BREAKPOINT } from '../utils/constants';

const HeaderWrapper = styled(FixedBar)`
  justify-content: space-between;
`;

const Logo = styled.p`
  font-size: 32px;
  font-weight: 700;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 28px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LinkWrapper = styled(Link)`
  margin-right: 1rem;
`;

export const HeaderLogo = () => {
  return (
    <HeaderWrapper>
      <Logo>Ballcapz</Logo>
      <LinksContainer>
        <LinkWrapper to="/about">
          <p>About</p>
        </LinkWrapper>
        <LinkWrapper to="/projects">
          <p>Projects</p>
        </LinkWrapper>
      </LinksContainer>
    </HeaderWrapper>
  );
};
