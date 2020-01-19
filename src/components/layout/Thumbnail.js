import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'gatsby-image/withIEPolyfill';

import Text from '../Text';
import VerticalSpacing from '../VerticalSpacing';

const Thumbnail = styled(props => (
  <a
    className={props.className}
    href={props.link}
  >
    <Image fluid={props.image} />

    <VerticalSpacing size={1} />

    <h2>
      <Text type="secondary">
        <span dangerouslySetInnerHTML={{
          __html: props.children
        }} />
      </Text>
    </h2>
  </a>
))`
  display: block;
  margin: 30px 0;
`;

Thumbnail.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
}

export default Thumbnail;