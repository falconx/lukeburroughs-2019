import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BACKGROUND_LIGHT = 'light';
const BACKGROUND_DARK = 'dark';

const NavList = styled.ul`
  display: flex;
`;

const NavListItem = styled.li`
  & + & {
    margin-left: 90px;
  }
`;

const NavLink = styled.a.attrs(props => ({
  title: props.children,
}))`
  position: relative;
  border-bottom: 1px solid transparent;
  color: ${props => props.theme.colors.steal};

  /* wait until the sticky menu is off-screen before switching colour */
  ${props => !props.isSticky && `
    transition-property: color;
    transition-delay: 1s;
  `}

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
  &:focus {
    font-weight: 500;
    border-bottom-color: currentColor;
  }

  ${props => props.active && `
    color: ${props.background === BACKGROUND_LIGHT
      ? props.theme.colors.black
      : '#fff'
    };

    font-weight: 500;
    border-bottom-color: currentColor;
  `}
`;

NavLink.propTypes = {
  isSticky: PropTypes.bool
};

const LargeNavList = props => (
  <NavList>
    <NavListItem>
      <NavLink
        href="/"
        active
        isSticky={props.isSticky}
        background={props.background}
      >Work</NavLink>
    </NavListItem>
    <NavListItem>
      <NavLink
        href="/"
        isSticky={props.isSticky}
        background={props.background}
      >Process</NavLink>
    </NavListItem>
    <NavListItem>
      <NavLink
        href="/"
        isSticky={props.isSticky}
        background={props.background}
      >About</NavLink>
    </NavListItem>
  </NavList>
);

LargeNavList.propTypes = {
  background: PropTypes.oneOf([
    BACKGROUND_LIGHT,
    BACKGROUND_DARK,
  ]),
};

LargeNavList.defaultProps = {
  background: BACKGROUND_LIGHT,
};

export default LargeNavList;