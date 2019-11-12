import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from '../../components/Grid';
import Heading from '../../components/Heading';

// Todo: use Gatsby Image

const MidImageRight = props => (
  <Row
    type="flex"
    align="bottom"
    gutter={20}
  >
    <Col xs={24} lg={{ span: 18, push: 6 }}>
      <img {...props.image} />
    </Col>
    <Col xs={24} lg={{ span: 6, pull: 18 }}>
      <Heading
        headingLevel={2}
        type="caption"
      >{props.caption}</Heading>

      {props.children}
    </Col>
  </Row>
);

MidImageRight.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired,
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  children: PropTypes.node.isRequired
};

export default MidImageRight;