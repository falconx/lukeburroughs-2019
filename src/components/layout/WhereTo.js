import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Row, Col } from '../../components/Grid';
import Text from '../../components/Text';
import TextSquare from '../../components/TextSquare';
import AnimateIntoView from '../AnimateIntoView';

const Spacer = styled.div`
  margin-bottom: 40px

  ${props => props.theme.query.md} {
    margin-bottom: 30px;
  }

  ${props => props.theme.query.lg} {
    margin-bottom: 70px;
  }
`;

const Controls = styled.div`
  margin-bottom: 30px;

  ${props => props.theme.query.lg} {
    margin-bottom: 40px;
  }
`;

const Control = styled.button.attrs({
  type: 'button'
})`
  line-height: 1;
`;

const Item = styled.div`
  ${props => !props.isLastChild && `
    margin-bottom: 10px;
  `}

  ${props => props.theme.query.md} {
    margin-bottom: 0;
  }
`;

Item.propTypes = {
  isLastChild: PropTypes.bool
};

const WhereTo = styled(props => (
  <AnimateIntoView>
    <div className={props.className}>
      <h2>
        <Text type="secondary">Where To?</Text>
      </h2>

      <Spacer />

      <Controls>
        <Row gutter={20}>
          <Col xs={24} md={8}>
            <Control>
              <TextSquare>Previous</TextSquare>
            </Control>
          </Col>
          <Col xs={24} md={{ span: 8, offset: 8 }}>
            <Control>
              <TextSquare>Next</TextSquare>
            </Control>
          </Col>
        </Row>
      </Controls>

      <Row gutter={20}>
        {React.Children.map(props.children, (child, index) => (
          <Col xs={24} md={8}>
            <Item isLastChild={index === React.Children.count(props.children) - 1}>{child}</Item>
          </Col>
        ))}
      </Row>
    </div>
  </AnimateIntoView>
))`
  margin: 70px 0;
`;

export default WhereTo;