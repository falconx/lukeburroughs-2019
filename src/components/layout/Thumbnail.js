import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'gatsby-image/withIEPolyfill';

import Text from '../Text';
import VerticalSpacing from '../VerticalSpacing';

const Thumbnail = styled(props => (
  <div className={props.className}>
    <Image fluid={props.image} />

    <VerticalSpacing size={1} />

    <h2>
      <Text type="secondary">
        {props.children}
      </Text>
    </h2>
  </div>
))`
  margin: 30px 0;
`;

Thumbnail.propTypes = {
  image: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
}

export default Thumbnail;