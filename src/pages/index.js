import React from 'react';
import {
  ThemeProvider,
  createGlobalStyle,
} from 'styled-components';

import { GridStyles } from '../components/Grid';
import Layout from '../components/layout/Layout';
import SEO from '../components/Seo';
import { BreakpointProvider } from '../components/Media';

import FullImg from '../components/layout/FullImg';
import Intro from '../components/layout/Intro';
import MidImageLeft from '../components/layout/MidImageLeft';
import MidImageRight from '../components/layout/MidImageRight';
import SmallImg from '../components/layout/SmallImg';
import ProjectInfo from '../components/layout/ProjectInfo';
import WhereTo from '../components/layout/WhereTo';
import Thumbnail from '../components/layout/Thumbnail';

import matterRegular from '../fonts/MatterTRIAL-Regular.otf';
import matterMedium from '../fonts/MatterTRIAL-Medium.otf';

import dMidImageRight from '../images/content-mid-1.jpg';
import dImgFull from '../images/content-full-1.jpg';
import dSmallImage from '../images/content-small-1.jpg';
import contentMid1 from '../images/content-mid-1@3x.png';

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

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <BreakpointProvider>
      <Layout>
        <SEO title="Home" />

        <GlobalStyles />
        <GridStyles />

        <Intro
          caption="The Challenge"
          title={<span>It’s twenty years&mdash;<br />twenty years too long</span>}
        >
          <p>
            With its open form and radiating lines, the Plume logomark
            embodies the limitless adaptability of the Plume experience.
            The modular, hexagonal geometry of the mark is reminiscent of
            both structural and molecular
          </p>
        </Intro>

        <MidImageRight
          caption="Caption title"
          image={{
            src: dMidImageRight,
            alt: ''
          }}
        >
          <p>
            Logomark embodies the limitless adaptability of the Plume experience.
            The modular, hexagonal geometry of the mark is reminiscent of both
            structural and molecularThe modular, hexagonal geometry of tgsdgs
          </p>
        </MidImageRight>

        <FullImg src={dImgFull} alt="" />

        <SmallImg
          imageLeft={{
            src: dSmallImage,
            alt: ''
          }}
          imageRight={{
            src: dSmallImage,
            alt: ''
          }}
        />

        <SmallImg
          dark
          imageLeft={{
            src: dSmallImage,
            alt: ''
          }}
          imageRight={{
            src: dSmallImage,
            alt: ''
          }}
        />

        <MidImageLeft
          caption="Caption title"
          image={{
            src: dMidImageRight,
            alt: ''
          }}
        >
          <p>
            Logomark embodies the limitless adaptability of the Plume experience.
            The modular, hexagonal geometry of the mark is reminiscent of both
            structural and molecularThe modular, hexagonal geometry of tgsdgs
          </p>
        </MidImageLeft>

        <ProjectInfo
          caption="Caption goes here!"
        >
          Awaken Sounds: 2018—2019<br />
          Client—Self Initiated + Soundcloud / Brand Systems / Interaction Design / Principle / After Effects / Motion / Trapcode Particular / Red Giant Suite / 3D / Sound Design.
        </ProjectInfo>

        <WhereTo>
          <img src={contentMid1} alt="" />
          <img src={contentMid1} alt="" />
          <img src={contentMid1} alt="" />
        </WhereTo>

        <Thumbnail src={contentMid1} alt="">
          <span>
            Your Channel<br />
            BBC iPlayer
          </span>
        </Thumbnail>
      </Layout>
    </BreakpointProvider>
  </ThemeProvider>
);

export default IndexPage;
