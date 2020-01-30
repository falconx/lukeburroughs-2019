import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Row, Col } from '../Grid';
import Text from '../Text';
import VerticalSpacing from '../VerticalSpacing';
import AnimateIntoView from '../AnimateIntoView';

const Intro = styled(props => (
  <AnimateIntoView>
    <div className={props.className}>
      <Row gutter={20}>
        <Col xs={24} lg={6}>
          <h2>
            <Text type="caption">{props.caption}</Text>
          </h2>
        </Col>
        <Col xs={24} lg={18}>
          <h1>
            <Text type="secondary">{props.title}</Text>
          </h1>

          <VerticalSpacing size={3} />

          <Row gutter={20}>
            <Col xs={24} lg={8}>
              {props.children}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  </AnimateIntoView>
))`
  margin: 30px 0;
`;

Intro.propTypes = {
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  children: PropTypes.node.isRequired
};

export default Intro;