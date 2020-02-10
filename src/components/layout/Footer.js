import React from 'react';
import styled from 'styled-components';

import Constrain from './Constrain';

import { Media } from '../Media';
import { Row, Col } from '../Grid';

import CustomLink from '../Link';

const GUTTER = 20;
const ICON_WIDTH = 24;

const DribbleIcon = () => (
  <svg role="img" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Dribbble icon</title>
    <path fill="currentColor" d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
  </svg>
);

const MediumIcon = () => (
  <svg role="img" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Medium icon</title>
    <path fill="currentColor" d="M0 0v24h24V0H0zm19.938 5.686L18.651 6.92a.376.376 0 0 0-.143.362v9.067a.376.376 0 0 0 .143.361l1.257 1.234v.271h-6.322v-.27l1.302-1.265c.128-.128.128-.165.128-.36V8.99l-3.62 9.195h-.49L6.69 8.99v6.163a.85.85 0 0 0 .233.707l1.694 2.054v.271H3.815v-.27L5.51 15.86a.82.82 0 0 0 .218-.707V8.027a.624.624 0 0 0-.203-.527L4.019 5.686v-.27h4.674l3.613 7.923 3.176-7.924h4.456v.271z" />
  </svg>
);

const InstagramIcon = () => (
  <svg role="img" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Instagram icon</title>
    <path fill="currentColor" d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg role="img" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>LinkedIn icon</title>
    <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const SocialLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr) auto;
  margin: 30px -${GUTTER}px 0;

  > * {
    margin: 0 ${GUTTER}px;
  }

  ${props => props.theme.query.lg} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin: 0;

    > * {
      margin: 0;
    }
  }
`;

const Link = styled.a`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  ${props => props.theme.query.lg} {
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  margin-right: ${ICON_WIDTH + GUTTER}px;
`;

const UnheardText = styled.div`
  margin-bottom: 30px;

  ${props => props.theme.query.md} {
    margin-bottom: 0;
  }
`;

const Footer = styled(props => (
  <Media>
    {mq => (
      <footer className={props.className}>
        <Constrain>
          <Content>
            <TextContainer>
              <Row gutter={20}>
                <Col xs={24} md={8}>
                  <UnheardText>&copy; Unheard Design</UnheardText>
                </Col>

                <Col xs={12} md={8}>
                  <CustomLink href="mailto:hi@unheard.design">hi@unheard.design</CustomLink><br />
                  +44 784 00 95144
                </Col>

                <Col cs={12} md={8}>
                  Website Development:<br />
                  <CustomLink href="http://mattlayton.co.uk" target="blank">mattlayton.co.uk</CustomLink>&rarr;
                </Col>
              </Row>
            </TextContainer>

            <SocialLinks>
              <Link href="https://dribbble.com/unheardesign">
                <DribbleIcon />
              </Link>
              <Link href="https://www.instagram.com/unheard.design">
                <InstagramIcon />
              </Link>
              <Link href="https://medium.com/@luke.burroughs">
                <LinkedInIcon />
              </Link>
              <Link href="https://uk.linkedin.com/in/luke-burroughs-31a0975a">
                <MediumIcon />
              </Link>
            </SocialLinks>
          </Content>
        </Constrain>
      </footer>
    )}
  </Media>
))`
  margin-top: auto;
  padding-bottom: 20px;
`;

export default Footer;