import React from 'react';
import styled, {
  ThemeProvider,
  createGlobalStyle,
} from 'styled-components';

import { GridStyles, Row, Col } from '../components/Grid';
import Layout from '../components/layout/Layout';
import Spacer from '../components/Spacer';
import VerticalSpacing from '../components/VerticalSpacing';
import Heading from '../components/Heading';
import SEO from '../components/Seo';
import { BreakpointProvider } from '../components/Media';

import matterRegular from '../fonts/MatterTRIAL-Regular.otf';
import matterMedium from '../fonts/MatterTRIAL-Medium.otf';

import dMidImageRight from '../images/content-mid-1.jpg';
import dImgFull from '../images/content-full-1.jpg';
import dSmallImage from '../images/content-small-1.jpg';

import theme from '../theme';

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

  /* Remove button styles on button elements with a class attribute */
  button[class] {
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

const FullImage = styled.img`
  display: block;
`;

const LayoutSmall = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
  background-color: ${props => props.dark
    ? props.theme.colors.darkGrey
    : props.theme.colors.silverGrey
  };

  ${props => props.theme.query.md} {
    padding: 40px 60px;
  }

  ${props => props.theme.query.lg} {
    padding: 90px;
  }
`;

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <BreakpointProvider>
      <Layout>
        <SEO title="Home" />

        <GlobalStyles />
        <GridStyles />

        <Row gutter={20}>
          <Col xs={24} lg={6}>
            <Heading
              headingLevel={2}
              type="caption"
            >The Challenge</Heading>
          </Col>
          <Col xs={24} lg={18}>
            <Heading
              headingLevel={1}
              type="main"
            >It’s twenty years&mdash;<br />twenty years too long</Heading>

            <Row gutter={20}>
              <Col xs={24} lg={8}>
                <p>
                  With its open form and radiating lines, the Plume logomark
                  embodies the limitless adaptability of the Plume experience.
                  The modular, hexagonal geometry of the mark is reminiscent of
                  both structural and molecular
                </p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Spacer />

        <Row
          type="flex"
          align="bottom"
          gutter={20}
        >
          <Col xs={24} lg={{ span: 18, push: 6 }}>
            <img src={dMidImageRight} alt="" />
          </Col>
          <Col xs={24} lg={{ span: 6, pull: 18 }}>
            <Heading
              headingLevel={2}
              type="caption"
            >Caption title</Heading>

            <p>
              Logomark embodies the limitless adaptability of the Plume experience.
              The modular, hexagonal geometry of the mark is reminiscent of both
              structural and molecularThe modular, hexagonal geometry of tgsdgs
            </p>
          </Col>
        </Row>

        <VerticalSpacing size={1} />

        <FullImage src={dImgFull} alt="" />

        <VerticalSpacing size={1} />

        <LayoutSmall>
          <Row gutter={20}>
            <Col xs={24} sm={12}>
              <img src={dSmallImage} alt="" />
            </Col>
            <Col xs={24} sm={12}>
              <img src={dSmallImage} alt="" />
            </Col>
          </Row>
        </LayoutSmall>

        <VerticalSpacing size={1} />

        <Row
          type="flex"
          align="bottom"
          gutter={20}
        >
          <Col xs={24} lg={18}>
            <img src={dMidImageRight} alt="" />
          </Col>
          <Col xs={24} lg={6}>
            <Heading
              headingLevel={2}
              type="caption"
            >Caption title</Heading>

            <p>
              Logomark embodies the limitless adaptability of the Plume experience.
              The modular, hexagonal geometry of the mark is reminiscent of both
              structural and molecularThe modular, hexagonal geometry of tgsdgs
            </p>
          </Col>
        </Row>

        <VerticalSpacing size={1} />

        <Row gutter={20}>
          <Col xs={24} lg={6}>
            <Heading
              headingLevel={2}
              type="caption"
            >The Challenge</Heading>
          </Col>
          <Col xs={24} lg={18}>
            <Heading
              headingLevel={1}
              type="main"
            >First impressions,<br />age-old memories</Heading>

            <Row gutter={20}>
              <Col xs={24} lg={8}>
                <p>
                  With its open form and radiating lines, the Plume logomark
                  embodies the limitless adaptability of the Plume experience.
                  The modular, hexagonal geometry of the mark is reminiscent of
                  both structural and molecular
                </p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Spacer />

        <LayoutSmall dark>
          <Row gutter={20}>
            <Col xs={24} sm={12}>
              <img src={dSmallImage} alt="" />
            </Col>
            <Col xs={24} sm={12}>
              <img src={dSmallImage} alt="" />
            </Col>
          </Row>
        </LayoutSmall>
      </Layout>
    </BreakpointProvider>
  </ThemeProvider>
);

export default IndexPage;
