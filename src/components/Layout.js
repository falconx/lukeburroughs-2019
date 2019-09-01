import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import VerticalSpacing from './VerticalSpacing';

import hero from '../images/ff8-hero.png';
import logo from '../images/logo-white.png';

const Header = styled.header`
  position: relative;
`;

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

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
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

  ul {
    display: flex;
  }

  li + li {
    margin-left: 90px;
  }

  ${props => props.theme.query.md} {
    height: ${props => props.theme.layout.navHeight.md}px;
    padding: 0 30px;
  }
`;

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

  /* Todo: replace with alternate nav */
  display: none;
  ${props => props.theme.query.lg} {
    display: inline;
  }
`;

const Logo = styled.img.attrs({
  src: logo,
  alt: '',
})`
  height: 20px;
`;

const Layout = ({ children }) => (
  <React.Fragment>
    {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

    <Header>
      <Nav>
        <a href="/">
          <Logo />
        </a>
        <ul>
          <li>
            <NavLink href="/" active>Work</NavLink>
          </li>
          <li>
            <NavLink href="/">Process</NavLink>
          </li>
          <li>
            <NavLink href="/">About</NavLink>
          </li>
        </ul>
      </Nav>
      <HeroImage src={hero} alt="" />
    </Header>

    <VerticalSpacing size={1} />

    <Main>
      {children}
    </Main>
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
