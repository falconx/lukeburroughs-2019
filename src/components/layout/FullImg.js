import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Todo: Use gatsby-image
const FullImg = styled.img`
  margin: 30px 0;
`;

FullImg.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};

FullImg.defaultProps = {
  alt: ''
};

export default FullImg;