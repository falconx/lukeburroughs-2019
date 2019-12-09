import React from 'react';
import styled from 'styled-components';

import { Row, Col } from '../Grid';
import Text from '../Text';

const SubTitle = styled(props => (
  <div className={props.className}>
    <Row>
      <Col xs={24} md={10}>
        <h2>
          <Text type="secondary">
            <span dangerouslySetInnerHTML={{
              __html: props.children
            }} />
          </Text>
        </h2>
      </Col>
    </Row>
  </div>
))`
  margin: 30px 0;
`

export default SubTitle;