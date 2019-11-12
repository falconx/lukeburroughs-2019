import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Row, Col } from '../../components/Grid';

// Todo: use Gatsby Image

const SmallImg = styled(props => (
  <div className={props.className}>
    <Row gutter={20}>
      <Col xs={24} sm={12}>
        <img {...props.imageLeft} />
      </Col>
      <Col xs={24} sm={12}>
        <img {...props.imageRight} />
      </Col>
    </Row>
  </div>
))`
  display: flex;
  justify-content: center;
  padding: 30px;
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
  imageLeft: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired,
  imageRight: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired,
};

export default SmallImg;