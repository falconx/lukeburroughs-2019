import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'gatsby-image/withIEPolyfill';

import { Row, Col } from '../Grid';
import AnimateIntoView from '../AnimateIntoView';

const SmallImg = styled(props => (
  <AnimateIntoView>
    <div className={props.className}>
      <Row gutter={20}>
        <Col xs={24} sm={12}>
          <Image fluid={props.imageLeft} />
        </Col>
        <Col xs={24} sm={12}>
          <Image fluid={props.imageRight} />
        </Col>
      </Row>
    </div>
  </AnimateIntoView>
))`
  padding: 30px;
  margin: 30px 0;
  background-color: ${props => props.dark
    ? props.theme.colors.darkGrey
    : props.theme.colors.silverGrey
  };

  ${props => props.theme.query.md} {
    padding: 40px 60px;
  }

  ${props => props.theme.query.lg} {
    padding: 90px;
  }
`;

SmallImg.propTypes = {
  dark: PropTypes.bool,
  imageLeft: PropTypes.object.isRequired,
  imageRight: PropTypes.object.isRequired,
};

export default SmallImg;