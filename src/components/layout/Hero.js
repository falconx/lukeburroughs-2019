import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Todo: Use gatsby-image
const Hero = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  object-position: top center;
`;

Hero.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Hero;