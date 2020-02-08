import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import CustomLink from '../../Link';

const LIGHT = 'light';
const DARK = 'dark';

const NavList = styled.ul`
  display: flex;
`;

const NavListItem = styled.li`
  & + & {
    margin-left: 90px;
  }
`;

const NavLink = styled(CustomLink).attrs(props => ({
  as: Link,
  title: props.children,
}))`
  color: ${props => props.theme.colors.steal};

  /* prevent items shifting on hover/focus */
  &::after {
    content: attr(title);
    display: block;
    font-weight: 500;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  &:hover,
  &:focus,
  &.active {
    color: ${props => props.text === LIGHT
      ? '#fff'
      : props.theme.colors.black
    };
  }
`;

NavLink.propTypes = {
  isSticky: PropTypes.bool
};

const LargeNavList = props => (
  <NavList>
    <NavListItem>
      <NavLink
        to="/"
        isSticky={props.isSticky}
        text={props.text}
      >Work</NavLink>
    </NavListItem>
    <NavListItem>
      <NavLink
        to="/process"
        isSticky={props.isSticky}
        text={props.text}
      >Process</NavLink>
    </NavListItem>
    <NavListItem>
      <NavLink
        to="/about"
        isSticky={props.isSticky}
        text={props.text}
      >About</NavLink>
    </NavListItem>
  </NavList>
);

LargeNavList.propTypes = {
  text: PropTypes.oneOf([
    LIGHT,
    DARK,
  ]),
};

LargeNavList.defaultProps = {
  text: LIGHT,
};

export default LargeNavList;