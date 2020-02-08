import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Slider from 'react-slick';

import { Row, Col } from '../../components/Grid';
import { Media } from '../../components/Media';
import Text from '../../components/Text';
import TextSquare from '../../components/TextSquare';
import AnimateIntoView from '../AnimateIntoView';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GlobalStyles = createGlobalStyle`
  .slick-list {
    margin: 0 -10px !important;
  }

  .slick-track {
    margin: 0 !important;
  }

  .slick-slide > div {
    padding: 0 10px;
  }
`;

const Spacer = styled.div`
  margin-bottom: 40px;

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

const WhereTo = styled(props => {
  const slider = React.createRef(null);

  const MAX_SLIDES_IN_VIEW = 3;

  const slideCount = React.Children.count(props.children);
  const slidesInView = (slideCount < MAX_SLIDES_IN_VIEW) ? slideCount : MAX_SLIDES_IN_VIEW;

  return (
    <AnimateIntoView>
      <GlobalStyles />

      <div className={props.className}>
        <h2>
          <Text type="secondary">Where To?</Text>
        </h2>

        <Spacer />

        <Controls>
          <Row gutter={20}>
            <Col xs={24} md={8}>
              <Control onClick={() => { slider.current.slickPrev(); }}>
                <TextSquare>Previous</TextSquare>
              </Control>
            </Col>
            <Col xs={24} md={{ span: 8, offset: 8 }}>
              {(slideCount > MAX_SLIDES_IN_VIEW) && (
                <Control onClick={() => { slider.current.slickNext(); }}>
                  <TextSquare>Next</TextSquare>
                </Control>
              )}
            </Col>
          </Row>
        </Controls>

        <Media>
          {mq => (
            <Slider
              ref={slider}
              dots={false}
              infinite
              speed={1000}
              slidesToScroll={MAX_SLIDES_IN_VIEW}
              slidesToShow={mq.lte('xs') ? 1 : slidesInView}
              slidesPerRow={1}
              rows={mq.lte('xs') ? slidesInView : 1}
            >
              {React.Children.map(props.children, (child, index) => (
                <Item isLastChild={index === React.Children.count(props.children) - 1}>{child}</Item>
              ))}
            </Slider>
          )}
        </Media>
      </div>
    </AnimateIntoView>
  );
})`
  margin: 70px 0;
`;

export default WhereTo;