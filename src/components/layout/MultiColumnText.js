import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Row, Col } from '../Grid';
import AnimateIntoView from '../AnimateIntoView';

const MultiColumnText = styled(props => (
  <AnimateIntoView>
    <Row gutter={20}>
      {props.columns.map((column, index) => (
        <Col key={index} xs={24} md={6}>
          <div
           className={props.className}
           dangerouslySetInnerHTML={{
            __html: column.text,
          }} />
        </Col>
      ))}
    </Row>
  </AnimateIntoView>
))`
  > p + p {
  	margin-top: 20px;
  }
`;

MultiColumnText.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
  	// hasBlock: PropTypes.bool,
  	text: PropTypes.string.isRequired,
  })),
};

export default MultiColumnText;