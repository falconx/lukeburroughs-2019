import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Row, Col } from '../../components/Grid';
import Heading from '../../components/Heading';
import VerticalSpacing from '../../components/VerticalSpacing';

const Intro = props => (
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
);

Intro.propTypes = {
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  children: PropTypes.node.isRequired
};

export default Intro;