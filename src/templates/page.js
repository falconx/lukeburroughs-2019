import React from 'react';
import styled, {
  ThemeProvider,
  createGlobalStyle,
} from 'styled-components';
import Image from 'gatsby-image/withIEPolyfill';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import chunk from 'lodash/chunk';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { GridStyles, Row, Col } from '../components/Grid';
import TextSquare from '../components/TextSquare';
import Text from '../components/Text';
import SEO from '../components/Seo';
import { Media, BreakpointProvider } from '../components/Media';
import VerticalSpacing from '../components/VerticalSpacing';

import Spacer from '../components/layout/Spacer';
import Intro from '../components/layout/Intro';
import FullImg from '../components/layout/FullImg';
import MidImageLeft from '../components/layout/MidImageLeft';
import MidImageRight from '../components/layout/MidImageRight';
import SmallImg from '../components/layout/SmallImg';
import ProjectInfo from '../components/layout/ProjectInfo';
import Thumbnail from '../components/layout/Thumbnail';
import Title from '../components/layout/Title';
import SubTitle from '../components/layout/SubTitle';
import MultiColumnText from '../components/layout/MultiColumnText';
import Layout from '../components/layout/Layout';
import WhereTo from '../components/layout/WhereTo';
import BlogEntry from '../components/layout/BlogEntry';

import matterRegular from '../fonts/MatterTRIAL-Regular.otf';
import matterMedium from '../fonts/MatterTRIAL-Medium.otf';

import theme from '../theme';

import placeholder from '../images/content-mid-1@3x.png';

// const TYPE_DEFAULT = 'Default';
const TYPE_HOME = 'Home';
const TYPE_ABOUT = 'About';
const TYPE_CASE_STUDY = 'Case Study';

// const BACKGROUND_LIGHT = 'Light';
const BACKGROUND_DARK = 'Dark';

// const NAV_LIGHT = 'Light';
// const NAV_DARK = 'Dark';
// const NAV_TRANSPARENT_LIGHT_TEXT = 'Transparent w/Light Text';
// const NAV_TRANSPARENT_DARK_TEXT = 'Transparent w/Dark Text';

// const navAppearanceTypes = [
//   NAV_LIGHT,
//   NAV_DARK,
//   NAV_TRANSPARENT_LIGHT_TEXT,
//   NAV_TRANSPARENT_DARK_TEXT,
// ];

const LAYOUT_FULL_WIDTH = 'WordPressAcf_full_width';
const LAYOUT_MULTI_COLUMN_TEXT = 'WordPressAcf_multi_column_text';
const LAYOUT_THUMBNAILS = 'WordPressAcf_thumbnails';
const LAYOUT_SPACER = 'WordPressAcf_spacer';

const COMPONENT_INTRO = 'intro';
const COMPONENT_FULL_IMG = 'full_img';
const COMPONENT_MID_IMAGE_LEFT = 'mid_image_left';
const COMPONENT_MID_IMAGE_RIGHT = 'mid_image_right';
const COMPONENT_PROJECT_INFO = 'project_info';
const COMPONENT_SMALL_IMG = 'small_img';
const COMPONENT_THUMBNAIL = 'thumbnail';
const COMPONENT_TITLE = 'title';
const COMPONENT_SUB_TITLE = 'sub_title';

const MODE_DARK = 'Dark';

const transformLink = link => link && link.replace(process.env.GATSBY_WORDPRESS_URL, '');

// "Ignore" hack added as a workaround to https://github.com/gatsbyjs/gatsby/issues/15707
export const query = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      acf {
        page_type
        page_background
        show_project_in_mind_block
        nav_appearance {
          nav_appearance
          nav_appearance_on_scroll
        }
        hero_image {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        hero_video {
          localFile {
            publicURL
          }
        }
        hero_text
        title
        image_list {
          images {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        entries {
          date
          destination
          light
          title
          image {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        layout_page {
          ... on WordPressAcf_full_width {
            internal {
              type
            }
            component {
              acf_fc_layout
              caption
              text
              title
              content_title
              content_destination
              image {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              content_thumbnail {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              left_image {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              right_image {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
          ... on WordPressAcf_spacer {
            internal {
              type
            }
          }
          ... on WordPressAcf_thumbnails {
            internal {
              type
            }
            left_title
            left_destination
            left_thumbnail {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            right_title
            right_destination
            right_thumbnail {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          ... on WordPressAcf_multi_column_text {
            internal {
              type
            }
            column_1_block
            column_1_text
            column_2_block
            column_2_text
            column_3_block
            column_3_text
            column_4_block
            column_4_text
          }
        }
      }
    }
  }
`;

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
    height: 100%;
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    min-height: 100%;
  }

  /* Set core body defaults */
  body {
    height: 100%;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: MatterTrial;
    font-size: 1.125rem;
    color: ${props => props.theme.colors.black};

    ${props => props.pageBackground === BACKGROUND_DARK && `
      color: #fff;
      background-color: ${props.theme.colors.darkGrey};
    `}
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

    <Spacer />
  </React.Fragment>
);

const FullWidth = styled.div`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

const BlogEnties = styled.div`
  /* nav height */
  margin-top: -80px;
`;

const AnimateIntoView = props => {
  const [ref, inView, entry] = useInView({
    threshold: 0,
  });

  const variants = {
    hide: {
      opacity: 0,
      translateY: '100px',
    },
    show: {
      opacity: 1,
      translateY: '0px',
    },
  };

  return (
    <motion.div
      {...props}
      ref={ref}
      variants={variants}
      animate={inView ? 'show' : 'hide'}
      transition={{
        duration: 2
      }}
    />
  );
};

const Page = props => {
  const page = props.data.wordpressPage;
  const layouts = page.acf.layout_page || [];

  const heroImage = get(page, 'acf.hero_image.localFile.childImageSharp.fluid');
  const heroVideo = get(page, 'acf.hero_video.localFile.publicURL');

  const hero = {
    image: heroImage,
    video: heroVideo,
    text: page.acf.hero_text,
  };

  const renderComponents = components => {
    return components.map((component, index) => {
      switch (component.acf_fc_layout) {
        case COMPONENT_INTRO:
          return (
            <Intro
              key={index}
              caption={component.caption}
              title={component.title}
            >
              <div dangerouslySetInnerHTML={{
                __html: component.text
              }} />
            </Intro>
          );

        case COMPONENT_FULL_IMG:
          return (
            <FullImg
              key={index}
              image={component.image.localFile.childImageSharp.fluid}
            />
          );

        case COMPONENT_MID_IMAGE_LEFT:
          return (
            <MidImageLeft
              key={index}
              caption={component.caption}
              image={component.image.localFile.childImageSharp.fluid}
            >
              <div dangerouslySetInnerHTML={{
                __html: component.text
              }} />
            </MidImageLeft>
          );

        case COMPONENT_MID_IMAGE_RIGHT:
          return (
            <MidImageRight
              key={index}
              caption={component.caption}
              image={component.image.localFile.childImageSharp.fluid}
            >
              <div dangerouslySetInnerHTML={{
                __html: component.text
              }} />
            </MidImageRight>
          );

        case COMPONENT_PROJECT_INFO:
          return (
            <ProjectInfo
              key={index}
              caption={component.caption}
            >
              <div dangerouslySetInnerHTML={{
                __html: component.text
              }} />
            </ProjectInfo>
          );

        case COMPONENT_SMALL_IMG:
          return (
            <SmallImg
              key={index}
              imageLeft={component.left_image.localFile.childImageSharp.fluid}
              imageRight={component.right_image.localFile.childImageSharp.fluid}
              dark={component.mode === MODE_DARK}
            />
          );

        case COMPONENT_THUMBNAIL:
          return (
            <AnimateIntoView key={index}>
              <Thumbnail
                image={component.content_thumbnail.localFile.childImageSharp.fluid}
                link={transformLink(component.content_destination)}
              >
                {component.content_title}
              </Thumbnail>
            </AnimateIntoView>
          );

        case COMPONENT_TITLE:
          return (
            <Title key={index}>
              <span dangerouslySetInnerHTML={{
                __html: component.text
              }} />
            </Title>
          );

        case COMPONENT_SUB_TITLE:
          return (
            <SubTitle
              key={index}
              children={component.text}
            />
          );

        default:
          return null;
      }
    });
  };

  const renderLayout = (type, data, key) => {
    switch (type) {
      case LAYOUT_FULL_WIDTH:
        return renderComponents(data.component || []);

      case LAYOUT_MULTI_COLUMN_TEXT:
        return (
          <MultiColumnText
            key={key}
            columns={[
              {
                // hasBlock: data.column_1_block,
                text: data.column_1_text,
              },
              {
                // hasBlock: data.column_2_block,
                text: data.column_2_text,
              },
              {
                // hasBlock: data.column_3_block,
                text: data.column_3_text,
              },
              {
                // hasBlock: data.column_4_block,
                text: data.column_4_text,
              },
            ]}
          />
        );

      case LAYOUT_THUMBNAILS:
        return (
          <AnimateIntoView key={key}>
            <Row
              gutter={20}
            >
              <Col xs={24} md={12}>
                <Thumbnail
                  image={data.left_thumbnail.localFile.childImageSharp.fluid}
                  link={transformLink(data.left_destination)}
                >
                  {data.left_title}
                </Thumbnail>
              </Col>
              <Col xs={24} md={12}>
                <Thumbnail
                  image={data.right_thumbnail.localFile.childImageSharp.fluid}
                  link={transformLink(data.right_destination)}
                >
                  {data.right_title}
                </Thumbnail>
              </Col>
            </Row>
          </AnimateIntoView>
        );

      case LAYOUT_SPACER:
        return <Spacer key={key} />;

      default:
        return null;
    }
  };

  const imageList = (get(page, 'acf.image_list') || []).map(item => item.images.localFile.childImageSharp.fluid);

  let navAppearance = get(page, 'acf.nav_appearance');
  if (navAppearance) {
    navAppearance = {
      initial: navAppearance.nav_appearance,
      onScroll: navAppearance.nav_appearance_on_scroll,
    };
  }

  const {
    title,
    blog_entries: blogEntries = [],
    page_type: pageType,
    page_background: pageBackground,
    show_project_in_mind_block: showProjectInMindBlock,
  } = page.acf;

  return (
    <ThemeProvider theme={theme}>
      <BreakpointProvider>
        <Layout
          hero={hero}
          navAppearance={navAppearance}
        >
          {title && (
            <SEO title={title} />
          )}

          <GlobalStyles
            pageBackground={pageBackground}
          />
          <GridStyles />

          {blogEntries.length ? (
            <BlogEnties>
              <FullWidth>
                {blogEntries.map((entry, index) => (
                  <BlogEntry
                    key={index}
                    date={entry.date}
                    destination={entry.destination}
                    image={entry.image.localFile.childImageSharp.fluid}
                    light={entry.light}
                  >
                    {entry.title}
                  </BlogEntry>
                ))}
              </FullWidth>
            </BlogEnties>
          ) : null}

          {pageType === TYPE_HOME && (
            <HomeIntro />
          )}

          {layouts.map((layout, index) => {
            const type = layout.internal && layout.internal.type;

            if (!type) {
              return null;
            }

            return renderLayout(type, layout, index);
          })}

          {pageType === TYPE_CASE_STUDY && (
            <WhereTo>
              <img src={placeholder} alt="" />
              <img src={placeholder} alt="" />
              <img src={placeholder} alt="" />
            </WhereTo>
          )}

          {pageType === TYPE_ABOUT && imageList.length ? (
            <React.Fragment>
              {title && (
                <React.Fragment>
                  <h2>
                    <Text type="secondary">
                      <span dangerouslySetInnerHTML={{
                        __html: title,
                      }} />
                    </Text>
                  </h2>
                  <VerticalSpacing size={3} />
                </React.Fragment>
              )}

              <Media>
                {mq => (
                  <React.Fragment>
                    {chunk(imageList, mq.lte('sm') ? 2 : 4).map((list, index) => (
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

          {showProjectInMindBlock && (
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

export default Page;