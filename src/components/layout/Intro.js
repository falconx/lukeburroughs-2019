import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Row, Col } from '../Grid';
import Heading from '../Heading';
import VerticalSpacing from '../VerticalSpacing';

const Intro = styled(props => (
  <div className={props.className}>
    <Row gutter={20}>
      <Col xs={24} lg={6}>
        <Heading
          headingLevel={2}
          type="caption"
        >{props.caption}</Heading>
      </Col>
      <Col xs={24} lg={18}>
        <Heading
          headingLevel={1}
          type="main"
        >{props.title}</Heading>

        <VerticalSpacing size={3} />

        <Row gutter={20}>
          <Col xs={24} lg={8}>
            {props.children}
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
))`
  margin: 30px 0;
`;

Intro.propTypes = {
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  children: PropTypes.node.isRequired
};

export default Intro;