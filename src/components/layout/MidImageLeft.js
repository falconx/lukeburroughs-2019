import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'gatsby-image/withIEPolyfill';

import { Media } from '../Media';
import { Row, Col } from '../Grid';
import Text from '../Text';
import VerticalSpacing from '../VerticalSpacing';
import AnimateIntoView from '../AnimateIntoView';

const MidImageLeft = styled(props => (
  <AnimateIntoView>
    <div className={props.className}>
      <Media>
        {mq => (
          <Row
            type="flex"
            align="bottom"
            gutter={20}
          >
            <Col xs={24} lg={18}>
              <Image fluid={props.image} />

              {mq.lte('md') && (
                <VerticalSpacing size={3} />
              )}
            </Col>
            <Col xs={24} lg={6}>
              <h2>
                <Text type="caption">{props.caption}</Text>
              </h2>

              {props.children}
            </Col>
          </Row>
        )}
      </Media>
    </div>
  </AnimateIntoView>
))`
  ${props => props.theme.query.lg} {
    margin: 30px 0;
  }
`;

MidImageLeft.propTypes = {
  image: PropTypes.object.isRequired,
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  children: PropTypes.node.isRequired
};

export default MidImageLeft;