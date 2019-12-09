import React from 'react';
import styled from 'styled-components';

import Text from '../Text';

const Title = styled(props => (
  <h1 className={props.className}>
    <Text type="main">
  	  {props.children}
    </Text>
  </h1>
))`
  margin-bottom: 70px;
`;

export default Title;