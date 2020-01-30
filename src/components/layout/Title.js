import React from 'react';
import styled from 'styled-components';

import Text from '../Text';
import AnimateIntoView from '../AnimateIntoView';

const Title = styled(props => (
  <AnimateIntoView>
    <h1 className={props.className}>
      <Text type="main">
    	  {props.children}
      </Text>
    </h1>
  </AnimateIntoView>
))`
  margin-bottom: 70px;
`;

export default Title;