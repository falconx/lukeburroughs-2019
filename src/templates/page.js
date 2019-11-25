import React from 'react';

import IndexPage from '../pages/index';

import Intro from '../components/layout/Intro';
import FullImg from '../components/layout/FullImg';
import MidImageLeft from '../components/layout/MidImageLeft';
import MidImageRight from '../components/layout/MidImageRight';
import SmallImg from '../components/layout/SmallImg';
import ProjectInfo from '../components/layout/ProjectInfo';
import WhereTo from '../components/layout/WhereTo';
import Thumbnail from '../components/layout/Thumbnail';

// import dMidImageRight from '../images/content-mid-1.jpg';
// import dImgFull from '../images/content-full-1.jpg';
// import dSmallImage from '../images/content-small-1.jpg';
import contentMid1 from '../images/content-mid-1@3x.png';

const LAYOUT_12 = 'WordPressAcf_1_column_12';

const COMPONENT_INTRO = 'intro';
const COMPONENT_FULL_IMG = 'full_img';
const COMPONENT_MID_IMAGE_LEFT = 'mid_image_left';
const COMPONENT_MID_IMAGE_RIGHT = 'mid_image_right';
const COMPONENT_PROJECT_INFO = 'project_info';
const COMPONENT_SMALL_IMG = 'small_img';
const COMPONENT_THUMBNAIL = 'thumbnail';
const COMPONENT_WHERE_TO = 'where_to';

const MODE_DARK = 'Dark';

// acf_fc_layout

// "Ignore" hack added as a workaround to https://github.com/gatsbyjs/gatsby/issues/15707
// 
// act.image => hero
export const query = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      acf {
        image {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        layout_page {
          ... on WordPressAcf_1_column_12 {
            internal {
              type
            }
            components {
              acf_fc_layout
              caption
              title
              text
              mode
              image {
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
        }
      }
    }
  }
`;

const Page = props => {
  const page = props.data.wordpressPage;
  const layouts = page.acf.layout_page || [];

  const hero = page.acf.image && page.acf.image.localFile.childImageSharp.fluid;

  const renderComponents = (components = []) => {
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
            <Thumbnail
              key={index}
              image={component.image.localFile.childImageSharp.fluid}
            >
              {component.title}
            </Thumbnail>
          );

        // Todo
        case COMPONENT_WHERE_TO:
          return (
            <WhereTo key={index}>
              <img src={contentMid1} alt="" />
              <img src={contentMid1} alt="" />
              <img src={contentMid1} alt="" />
            </WhereTo>
          );

        default:
          return null;
      }
    });
  };

  const renderLayout = (type, components) => {
    switch (type) {
      case LAYOUT_12:
        return renderComponents(components);

      default:
        return null;
    }
  };

  return (
    <IndexPage
      hero={hero}
    >
      {layouts.map(layout => {
        const type = layout.internal && layout.internal.type;

        if (!type) {
          return null;
        }

        return renderLayout(type, layout.components);
      })}
    </IndexPage>
  );
};

export default Page;