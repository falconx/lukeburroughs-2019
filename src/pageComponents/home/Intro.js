import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Text from '../../components/Text';
import TextSquare from '../../components/TextSquare';
import { Row, Col } from '../../components/Grid';

import Spacer from '../../components/layout/Spacer';

const HomeIntro = () => {
  const data = useStaticQuery(graphql`
    query Mission {
      wordpressPage(title: { eq: "Home" }) {
        acf {
          mission
        }
      }
    }
  `);

  const mission = data.wordpressPage.acf.mission;

  return (
    <React.Fragment>
      <Row gutter={20}>
        <Col xs={24} md={4}>
          Luke Burroughs
        </Col>
        <Col xs={24} md={16}>
          2017&mdash;present
        </Col>
      </Row>

      <Spacer />

      <Row gutter={20}>
        <Col xs={24} md={4}>
          <TextSquare /> Mission
        </Col>
        <Col xs={24} md={16}>
          <h2>
            <Text type="secondary">
              <span dangerouslySetInnerHTML={{
                __html: mission,
              }} />
            </Text>
          </h2>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default HomeIntro;