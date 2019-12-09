import React from 'react';
import PropTypes from 'prop-types';
import styled, {
  ThemeProvider,
  createGlobalStyle,
} from 'styled-components';
import Image from 'gatsby-image/withIEPolyfill';
import chunk from 'lodash/chunk';

import { GridStyles, Row, Col } from '../components/Grid';
import TextSquare from '../components/TextSquare';
import Text from '../components/Text';
import Layout from '../components/layout/Layout';
import WhereTo from '../components/layout/WhereTo';
import Spacer from '../components/layout/Spacer';
import SEO from '../components/Seo';
import { Media, BreakpointProvider } from '../components/Media';
import VerticalSpacing from '../components/VerticalSpacing';

import matterRegular from '../fonts/MatterTRIAL-Regular.otf';
import matterMedium from '../fonts/MatterTRIAL-Medium.otf';

import theme from '../theme';

import placeholder from '../images/content-mid-1@3x.png';

const TYPE_DEFAULT = 'Default';
const TYPE_HOME = 'Home';
const TYPE_ABOUT = 'About';
const TYPE_CASE_STUDY = 'Case Study';

const NAV_TRANSPARENT = 'transparent';
const NAV_LIGHT = 'light';
const NAV_DARK = 'dark';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'MatterTrial';
    src: url(${matterRegular}) format('opentype'); 
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'MatterTrial';
    src: url(${matterMedium}) format('opentype'); 
    font-weight: 500;
    font-style: normal;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  :root {
    min-height: 100%;
  }

  /* Set core body defaults */
  body {
    min-height: 100%;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: MatterTrial;
    font-size: 1.125rem;
    color: ${props => props.theme.colors.black};
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    padding: 0;
    margin: 0;
    font: inherit;
    border: none;
    background: none;
    cursor: pointer;
    color: inherit;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font: inherit;
  }

  .noscroll {
    overflow-y: hidden;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;
  margin-bottom: 10px;

  ${props => props.theme.query.md} {
    height: 180px;
    margin-bottom: 30px;
  }
`;

const HomeIntro = () => (
  <React.Fragment>
    <Row gutter={20}>
      <Col xs={24} md={4}>
        Luke Burroughs
      </Col>
      <Col xs={24} md={16}>
        2017&mdash;present
      </Col>
    </Row>

    <Spacer />

    <Row gutter={20}>
      <Col xs={24} md={4}>
        <TextSquare /> Mission
      </Col>
      <Col xs={24} md={16}>
        <h2>
          <Text type="secondary">
            Create opportunities for brands and individuals to tell
            their stories in ways we haven’t heard before.
          </Text>
        </h2>
      </Col>
    </Row>
  </React.Fragment>
);

const IndexPage = props => {
  const navBackground = (() => {
    switch (props.pageType) {
      case TYPE_ABOUT:
        return NAV_LIGHT;

      default:
        return;
    }
  })();

  const navStickyBackground = (() => {
    switch (props.pageType) {
      case TYPE_ABOUT:
        return NAV_LIGHT;

      case TYPE_HOME:
        return NAV_DARK;

      case TYPE_CASE_STUDY:
        return NAV_LIGHT;

      default:
        return;
    }
  })();

  return (
    <ThemeProvider theme={theme}>
      <BreakpointProvider>
        <Layout
          hero={props.hero}
          navBackground={navBackground}
          navStickyBackground={navStickyBackground}
        >
          <SEO title="Home" />

          <GlobalStyles />
          <GridStyles />

          {props.pageType === TYPE_HOME && (
            <HomeIntro />
          )}

          {props.children}

          {props.pageType === TYPE_CASE_STUDY && (
            <WhereTo>
              <img src={placeholder} alt="" />
              <img src={placeholder} alt="" />
              <img src={placeholder} alt="" />
            </WhereTo>
          )}

          {props.pageType === TYPE_ABOUT && props.imageList.length ? (
            <React.Fragment>
              {props.title && (
                <React.Fragment>
                  <h2>
                    <Text type="secondary">
                      <span dangerouslySetInnerHTML={{
                        __html: props.title,
                      }} />
                    </Text>
                  </h2>
                  <VerticalSpacing size={3} />
                </React.Fragment>
              )}

              <Media>
                {mq => (
                  <React.Fragment>
                    {chunk(props.imageList, mq.lte('sm') ? 2 : 4).map((list, index) => (
                      <Row key={index} gutter={20} type="flex" justify="center">
                        {list.map((image, index) => (
                          <Col key={index} xs={12} md={6}>
                            <Logo>
                              <Image
                                fluid={image}
                                style={{
                                  width: mq.lte('sm') ? '90px' : '135px',
                                }}
                              />
                            </Logo>
                          </Col>
                        ))}
                      </Row>
                    ))}
                  </React.Fragment>
                )}
              </Media>
            </React.Fragment>
          ) : null}

          {[TYPE_DEFAULT, TYPE_CASE_STUDY, TYPE_ABOUT].includes(props.pageType) && (
            <div>
              <Spacer />

              <h2>
                <Text type="secondary">Project in mind?</Text>
              </h2>

              <a href="mailto:hi@unheard.design">
                <Text type="secondary">hi@unheard.design</Text>
              </a>

              <Spacer />
            </div>
          )}
        </Layout>
      </BreakpointProvider>
    </ThemeProvider>
  );
};

IndexPage.propTypes = {
  pageType: PropTypes.oneOf([
    TYPE_DEFAULT,
    TYPE_HOME,
    TYPE_ABOUT,
    TYPE_CASE_STUDY,
  ]),
  hero: PropTypes.shape({
    text: PropTypes.string,
    image: PropTypes.object,
    video: PropTypes.shape({
      mp4: PropTypes.string,
      webm: PropTypes.string,
    }),
  }),
  /* About page props for brand list */
  title: PropTypes.string,
  imageList: PropTypes.array,
};

IndexPage.defaultProps = {
  imageList: [],
};

export default IndexPage;
