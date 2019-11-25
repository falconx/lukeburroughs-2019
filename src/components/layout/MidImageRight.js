import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'gatsby-image/withIEPolyfill';

import { Media } from '../Media';
import { Row, Col } from '../Grid';
import Heading from '../Heading';
import VerticalSpacing from '../VerticalSpacing';

const MidImageRight = styled(props => (
  <div className={props.className}>
    <Media>
      {mq => (
        <Row
          type="flex"
          align="bottom"
          gutter={20}
        >
          <Col xs={24} lg={{ span: 18, push: 6 }}>
            <Image fluid={props.image} />

            {mq.lte('md') && (
              <VerticalSpacing size={3} />
            )}
          </Col>
          <Col xs={24} lg={{ span: 6, pull: 18 }}>
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

MidImageRight.propTypes = {
  image: PropTypes.object.isRequired,
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  children: PropTypes.node.isRequired
};

export default MidImageRight;