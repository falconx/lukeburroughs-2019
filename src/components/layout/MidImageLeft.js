import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Media } from '../../components/Media';
import { Row, Col } from '../../components/Grid';
import Heading from '../../components/Heading';
import VerticalSpacing from '../../components/VerticalSpacing';

// Todo: use Gatsby Image

const MidImageLeft = styled(props => (
  <div className={props.className}>
    <Media>
      {mq => (
        <Row
          type="flex"
          align="bottom"
          gutter={20}
        >
          <Col xs={24} lg={18}>
            <img {...props.image} />

            {mq.lte('md') && (
              <VerticalSpacing size={3} />
            )}
          </Col>
          <Col xs={24} lg={6}>
            <Heading
              headingLevel={2}
              type="caption"
            >{props.caption}</Heading>

            {props.children}
          </Col>
        </Row>
      )}
    </Media>
  </div>
))`
  ${props => props.theme.query.lg} {
    margin: 30px 0;
  }
`;

MidImageLeft.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired,
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  children: PropTypes.node.isRequired
};

export default MidImageLeft;