import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import CustomLink from '../../Link';

const NavList = styled.ul``;

const NavListItem = styled.li``;

const NavLink = styled(CustomLink).attrs(props => ({
  as: Link,
  title: props.children,
}))`
  font-size: 3.125rem;
  font-weight: 500;
  line-height: 1;

  &:hover,
  &:focus {
    color: rgba(255, 255, 255, 0.5) !important;
  }

  ${props => props.active && `
    color: rgba(255, 255, 255, 0.5) !important;
  `}

  ${props => props.theme.query.md} {
    font-size: 8.125rem;
  }
`;

const CompactNavList = () => (
  <NavList>
    <NavListItem>
      <NavLink to="/work" active>Work</NavLink>
    </NavListItem>
    <NavListItem>
      <NavLink to="/process">Process</NavLink>
    </NavListItem>
    <NavListItem>
      <NavLink to="/about">About</NavLink>
    </NavListItem>
  </NavList>
);

export default CompactNavList;