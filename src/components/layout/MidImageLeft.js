import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from '../../components/Grid';
import Heading from '../../components/Heading';

// Todo: use Gatsby Image

const MidImageLeft = props => (
  <Row
    type="flex"
    align="bottom"
    gutter={20}
  >
    <Col xs={24} lg={18}>
      <img {...props.image} />
    </Col>
    <Col xs={24} lg={6}>
      <Heading
        headingLevel={2}
        type="caption"
      >{props.caption}</Heading>

      {props.children}
    </Col>
  </Row>
);

MidImageLeft.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired,
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  children: PropTypes.node.isRequired
};

export default MidImageLeft;