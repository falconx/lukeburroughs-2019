import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'gatsby-image/withIEPolyfill';

import Text from '../Text';
import TextSquare from '../TextSquare';
import VerticalSpacing from '../VerticalSpacing';

import Constrain from './Constrain';

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  font-size: 0.875rem;
  padding: 10px 20px;
  color: ${props => props.light ? '#2b2b2b' : '#fff'};
  background-color: ${props => props.light ? '#fff' : '#2b2b2b'};
`;

Link.propTypes = {
  light: PropTypes.bool,
};

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  /* nav height */
  padding-top: 80px;
`;

const BlogEntry = styled(props => (
  <article className={props.className}>
    <Image
      fluid={props.image}
      objectFit="cover"
      objectPosition="top center"
      style={{
        height: '100vh',
        width: '100%',
      }}
    />

    <Content>
      <Constrain>
        <TextSquare>{props.date}</TextSquare>

        <h2>
          <Text type="main">
            <span dangerouslySetInnerHTML={{
              __html: props.children
            }} />
          </Text>
        </h2>

        <VerticalSpacing size={3} />

        <Link
          href={props.destination}
          light={props.light}
        >Read more</Link>
      </Constrain>
    </Content>
  </article>
))`
  position: relative;
  color: ${props => props.light ? '#fff' : '#2b2b2b'};
`;

BlogEntry.propTypes = {
  image: PropTypes.object.isRequired,
  destination: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  light: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default BlogEntry;