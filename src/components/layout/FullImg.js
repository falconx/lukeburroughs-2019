import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'gatsby-image/withIEPolyfill';

import AnimateIntoView from '../AnimateIntoView';

const FullImg = styled(props => (
  <AnimateIntoView>
    <div className={props.className}>
      <Image fluid={props.image} />
    </div>
  </AnimateIntoView>
))`
  margin: 30px 0;
`;

FullImg.propTypes = {
  image: PropTypes.object.isRequired
};

export default FullImg;