import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'gatsby-image/withIEPolyfill';
import { motion } from 'framer-motion';

import 'plyr/dist/plyr.css';

import { Media } from '../Media';
import VerticalSpacing from '../VerticalSpacing';

import Constrain from './Constrain';
import Footer from './Footer';
import LargeNavLinks from './nav/LargeNavLinks';
import CompactNavLinks from './nav/CompactNavLinks';

import logoLight from '../../images/logo-light.png';
import logoDark from '../../images/logo-dark.png';

if (typeof document !== 'undefined') {
  var Plyr = require('plyr');
}

const FADE_IN_DURATION = 500; // ms

const NAV_LIGHT = 'Light';
const NAV_DARK = 'Dark';
const NAV_TRANSPARENT_LIGHT_TEXT = 'Transparent w/Light Text';
const NAV_TRANSPARENT_DARK_TEXT = 'Transparent w/Dark Text';

const navAppearanceTypes = [
  NAV_LIGHT,
  NAV_DARK,
  NAV_TRANSPARENT_LIGHT_TEXT,
  NAV_TRANSPARENT_DARK_TEXT,
];

const Header = styled.header`
  position: relative;
  min-height: ${props => props.theme.layout.navHeight.xs}px;

  ${props => props.theme.query.md} {
    min-height: ${props => props.theme.layout.navHeight.md}px;
  }
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
  font-size: 1.5rem;
  letter-spacing: -0.8px;

  ${props => props.theme.query.md} {
    height: ${props => props.theme.layout.navHeight.md}px;
    padding: 0 30px;
  }
`;

const Nav = styled(props => {
  const variants = {
    default: {
      translateY: ['0%', '-100%'],
      transitionEnd: {
        position: 'absolute',
        translateY: 0,
      },
    },
    sticky: {
      position: 'fixed',
      translateY: ['-100%', '0%'],
    }
  };

  return (
    <motion.nav
      {...props}
      variants={variants}
      initial={false}
      animate={props.isSticky ? 'sticky' : 'default'}
    />
  );
})`
  left: 0;
  width: 100%;

  /* display drawer above hero caption */
  z-index: 1000;

  ${props => props.isDrawerOpen && `
    color: #fff;
  `}

  ${props => {
    switch (props.navAppearance.initial) {
      case NAV_LIGHT:
        return `
          color: ${props.theme.colors.black};
          background-color: #fff;
        `;

      case NAV_DARK:
        return `
          color: #fff;
          background-color: ${props.theme.colors.darkGrey};
        `;

      case NAV_TRANSPARENT_LIGHT_TEXT:
        return `
          color: #fff;
          background-color: transparent;
        `;

      default:
      case NAV_TRANSPARENT_DARK_TEXT:
        return `
          color: ${props.theme.colors.black};
          background-color: transparent;
        `;
    }
  }};

  ${props => {
    if (props.isSticky) {
      switch (props.navAppearance.onScroll) {
        case NAV_DARK:
          return `
            color: #fff;
            background-color: ${props.theme.colors.darkGrey};
          `;
        
        case NAV_TRANSPARENT_LIGHT_TEXT:
          return `
            color: #fff;
          `;

        case NAV_LIGHT:
          return `
            color: ${props.theme.colors.black};
            background-color: #fff;
          `;

        default:
        case NAV_TRANSPARENT_DARK_TEXT:
          return `
            color: ${props.theme.colors.black};
          `;
      }
    }
  }};
`;

Nav.propTypes = {
  isSticky: PropTypes.bool,
  isDrawerOpen: PropTypes.bool,
  navAppearance: PropTypes.shape({
    initial: PropTypes.oneOf(navAppearanceTypes).isRequired,
    onScroll: PropTypes.oneOf(navAppearanceTypes),
  }).isRequired,
};

const Logo = styled.img.attrs({
  src: logoLight,
  alt: '',
})`
  height: 20px;
`;

const NavToggle = styled.button.attrs({
  type: 'button'
})`
  width: 20px;
  height: 20px;
  position: relative;
  z-index: 10;

  &:before,
  &:after {
    content: '';
    position: absolute;
    background-color: currentColor;
    transition: transform 0.25s ease-out;
  }

  /* vertical line */
  &:before {
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    margin-left: -1px;
  }

  /* horizontal line */
  &:after {
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    margin-top: -1px;
  }

  ${props => props.isOpen && `
    color: #fff;

    &:before,
    &:before,
    &:after,
    &:after {
      transform: rotate(135deg);
    }
  `}
`;

const Drawer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: ${props => props.theme.colors.darkGrey};
  opacity: ${props => props.show ? '1' : '0'};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transition: ${FADE_IN_DURATION / 1000}s;
`;

const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 10px;

  ${props => props.theme.query.md} {
    padding: 0 30px;
  }
`;

const Copyright = styled.small`
  margin-bottom: 10px;
  margin-top: auto;
  font: inherit;

  &::before {
    content: '';
    display: inline-block;
    vertical-align: baseline;
    height: 1em;
    width: 1em;
    margin-right: 5px;
    background-color: currentColor;
  }

  ${props => props.theme.query.md} {
    min-height: 80px;
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }
`;

const Video = styled.video`
  object-fit: cover;
  height: 100vh !important;
`;

const HeroText = styled.div`
  position: absolute;
  bottom: 30px;
  z-index: 100;
  color: #fff;

  /* Todo: Avoid duplication with Text.js */
  font-size: 3.125rem;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -1.8px;

  ${props => props.theme.query.md} {
    font-size: 4.375rem;
  }

  ${props => props.theme.query.lg} {
    font-size: 8.125rem;
  }
`;

const Layout = styled(({
  hero,
  video,
  navAppearance,
  children,
  className,
}) => {
  const headerEl = useRef(null);

  const stickyOnScroll = !!(hero && (hero.image || hero.video));

  const [showDrawer, setShowDrawer] = useState(false);
  const [stickyOffset, setStickyOffset] = useState();

  // always sticky when not activated on scroll
  const [isSticky, setIsSticky] = useState(!stickyOnScroll);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  useLayoutEffect(() => {
    if (stickyOnScroll) {
      setStickyOffset(headerEl.current.offsetHeight);
    }
  });

  useEffect(() => {
    document.body.classList[showDrawer ? 'add' : 'remove']('noscroll');
  }, [showDrawer]);

  const onScroll = () => {
    if (stickyOnScroll) {
      setIsSticky(window.pageYOffset > stickyOffset);
    }
  }

  if (typeof document !== 'undefined' && hero && hero.video) {
    new Plyr(document.getElementById('plyr'), {
      // title: 'Todo',
      controls: false,
      autoplay: true,
      clickToPlay: false,
      loop: {
        active: true,
      },
      fullscreen: {
        enabled: false,
        fallback: false,
      },
    });
  }

  let logo = logoDark;

  if (
    (!isSticky && [NAV_DARK, NAV_TRANSPARENT_LIGHT_TEXT].includes(navAppearance.initial)) ||
    (isSticky && [NAV_DARK, NAV_TRANSPARENT_LIGHT_TEXT].includes(navAppearance.onScroll))
  ) {
    logo = logoLight;
  }

  return (
    <div className={className}>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

      <Header ref={headerEl}>
        <Media>
          {mq => (
            <Nav
              isSticky={isSticky}
              navAppearance={navAppearance}
              isDrawerOpen={showDrawer}
            >
              <NavContent>
                <a href="/">
                  <Logo src={logo} />
                </a>

                {mq.lte('md') ? (
                  <React.Fragment>
                    <NavToggle
                      isOpen={showDrawer}
                      onClick={() => setShowDrawer(!showDrawer)}
                    />

                    <Drawer show={showDrawer}>
                      <NavContent>
                        <a href="/">
                          <Logo />
                        </a>
                      </NavContent>
                      <DrawerContent>
                        <CompactNavLinks />
                        <Copyright>
                          &copy; Unheard 2019 &mdash; Norwich &amp; London
                        </Copyright>
                      </DrawerContent>
                    </Drawer>
                  </React.Fragment>
                ) : (
                  <LargeNavLinks
                    text={
                      (!isSticky && [NAV_DARK, NAV_TRANSPARENT_LIGHT_TEXT].includes(navAppearance.initial)) ||
                      (isSticky && [NAV_DARK, NAV_TRANSPARENT_LIGHT_TEXT].includes(navAppearance.onScroll))
                        ? 'light'
                        : 'dark'
                    }
                  />
                )}
              </NavContent>
            </Nav>
          )}
        </Media>

        {hero && hero.image && (
          <Image
            fluid={hero.image}
            objectFit="cover"
            objectPosition="top center"
            style={{
              height: '100vh',
              width: '100%',
            }}
          />
        )}

        {hero && !hero.image && hero.video && (
          <div>
            <Video
              src={hero.video}
              id="plyr"
            />
          </div>
        )}

        {hero && (hero.image || hero.video) && hero.text && (
          <Constrain>
            <HeroText>
              {hero.text}
            </HeroText>
          </Constrain>
        )}
      </Header>

      {hero && (hero.image || hero.video) && (
        <VerticalSpacing size={3} />
      )}

      <main role="main">
        <Constrain>
          {children}
        </Constrain>
      </main>

      <Footer />
    </div>
  );
})`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow-x: hidden;
`;

Layout.propTypes = {
  hero: PropTypes.shape({
    text: PropTypes.string,
    image: PropTypes.object,
    video: PropTypes.string,
  }),
  navAppearance: PropTypes.shape({
    initial: PropTypes.oneOf(navAppearanceTypes).isRequired,
    onScroll: PropTypes.oneOf(navAppearanceTypes),
  }),
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  navAppearance: {
    initial: NAV_LIGHT,
    onScroll: NAV_LIGHT,
  },
};

export default Layout;
