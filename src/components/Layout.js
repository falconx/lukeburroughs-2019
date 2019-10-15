import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

import VerticalSpacing from './VerticalSpacing';

import hero from '../images/ff8-hero.png';
import logo from '../images/logo-white.png';

const slideIn = keyframes`
  0% {
    position: absolute;
    transform: translateY(0);
  }

  1% {
    position: fixed;
    background-color: #fff;
    transform: translateY(-100%);
  }

  100% {
    position: fixed;
    background-color: #fff;
    transform: translateY(0);
  }
`;

const Header = styled.header`
  position: relative;
`;

// Todo: Use gatsby-image
const HeroImage = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  object-position: top center;
`;

const Main = styled.main`
  padding: 0 10px;
  margin: 0 auto;
  max-width: ${props => props.theme.layout.constrain}px;

  ${props => props.theme.query.md} {
    padding: 0 30px;
  }
`;

const NavList = styled.ul``;
const NavListItem = styled.li``;

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  animation: ${slideIn} 1s;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;
  animation-direction: reverse;

  ${props => props.isSticky && css`
    z-index: 1;

    animation-fill-mode: forwards;
    animation-direction: normal;
  `}
`;

const NavContent = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.theme.layout.constrain}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${props => props.theme.layout.navHeight.xs}px;
  padding: 0 10px;
  color: #fff;
  font-size: 1.5rem;
  letter-spacing: -0.8px;

  ${NavList} {
    display: flex;
  }

  ${NavListItem} + ${NavListItem} {
    margin-left: 90px;
  }

  ${props => props.theme.query.md} {
    height: ${props => props.theme.layout.navHeight.md}px;
    padding: 0 30px;
  }
`;

StyledNav.propTypes = {
  isSticky: PropTypes.bool,
};

const Nav = ({ stickyOffset, ...props }) => {
  const [isSticky, setIsSticky] = useState(false);

  const onScroll = () => {
    setIsSticky(window.pageYOffset > stickyOffset);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <StyledNav
      {...props}
      isSticky={isSticky}
      // force re-render to initiate CSS animation
      key={isSticky}
    />
  );
};

Nav.propTypes = {
  stickyOffset: PropTypes.number,
};

Nav.defaultProps = {
  stickyOffset: 0,
};

const NavLink = styled.a.attrs(props => ({
  title: props.children,
}))`
  position: relative;
  border-bottom: 1px solid transparent;
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
  &:focus {
    color: #fff;
    font-weight: 500;
    border-bottom-color: currentColor;
  }

  ${props => props.active && `
    color: #fff;
    font-weight: 500;
    border-bottom-color: currentColor;
  `}
`;

const Logo = styled.img.attrs({
  src: logo,
  alt: '',
})`
  height: 20px;
`;

const Layout = ({ children }) => {
  const headerEl = useRef(null);

  const [stickyOffset, setStickyOffset] = useState();

  useLayoutEffect(() => {
    setStickyOffset(headerEl.current.offsetHeight);
  });
  
  return (
    <React.Fragment>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

      <Header ref={headerEl}>
        <Nav stickyOffset={stickyOffset}>
          <NavContent>
            <a href="/">
              <Logo />
            </a>
            <NavList>
              <NavListItem>
                <NavLink href="/" active>Work</NavLink>
              </NavListItem>
              <NavListItem>
                <NavLink href="/">Process</NavLink>
              </NavListItem>
              <NavListItem>
                <NavLink href="/">About</NavLink>
              </NavListItem>
            </NavList>
          </NavContent>
        </Nav>
        <HeroImage src={hero} alt="" />
      </Header>

      <VerticalSpacing size={1} />

      <Main>
        {children}
      </Main>
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
