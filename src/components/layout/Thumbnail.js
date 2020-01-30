import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'gatsby-image/withIEPolyfill';

import Text from '../Text';
import VerticalSpacing from '../VerticalSpacing';

const UnderlineText = styled.span``;

const Thumbnail = styled(props => (
  <a
    className={props.className}
    href={props.link}
  >
    <Image fluid={props.image} />

    <VerticalSpacing size={1} />

    <h2>
      <Text type="secondary">
        <UnderlineText dangerouslySetInnerHTML={{
          __html: props.children
        }} />
      </Text>
    </h2>
  </a>
))`
  position: relative;
  display: block;
  margin: 30px 0;

  ${UnderlineText} {
    text-decoration: none;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 1px;
    transition: background-size .5s;
  }

  &:hover ${UnderlineText},
  &:focus ${UnderlineText} {
    background-size: 100% 1px;
  }
`;

Thumbnail.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
}

export default Thumbnail;