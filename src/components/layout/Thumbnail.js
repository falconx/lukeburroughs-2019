import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Heading from '../Heading';
import VerticalSpacing from '../VerticalSpacing';

// Todo: use Gatsby Image

const Thumbnail = styled(props => (
  <div className={props.className}>
    <img src={props.src} alt={props.alt} />

    <VerticalSpacing size={1} />

    <Heading
      headingLevel={2}
      type="main"
    >
      {props.children}
    </Heading>
  </div>
))`
  margin: 30px 0;
`;

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
}

export default Thumbnail;