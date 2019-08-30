import React from 'react';
import PropTypes from 'prop-types';
// import Image from 'gatsby-image';
import styled from 'styled-components';
// import { useStaticQuery, graphql } from 'gatsby';

import VerticalSpacing from './VerticalSpacing';

import hero from '../images/ff8-hero.png';
import logo from '../images/logo-white.png';

const Container = styled.div`
  margin: 0 auto;
  padding: ${props => props.theme.layout.gutter / 2}px;
  max-width: ${props => props.theme.layout.width}px;
`;

const Header = styled.header`
  position: relative;
`;

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 30px;
  color: #fff;
  font-size: 1.5rem;
  letter-spacing: -0.8px;

  ul {
    display: flex;
  }

  li + li {
    margin-left: 90px;
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
`;

const Logo = styled.img.attrs({
  src: logo,
  alt: '',
})`
  height: 20px;
`;

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //       }
  //     }
  //   }
  // `);

  return (
    <Container>
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
        <img src={hero} alt="" />
      </Header>

      <VerticalSpacing size={1} />

      <main>
        {children}
      </main>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
