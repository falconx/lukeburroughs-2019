import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HtmlToReact from 'html-to-react';
import ReactDOMServer from 'react-dom/server';

import { Row, Col } from '../Grid';
import AnimateIntoView from '../AnimateIntoView';
import TextSquare from '../TextSquare';

const HtmlToReactParser = HtmlToReact.Parser;
const htmlToReactParser = new HtmlToReactParser();
const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);

const isValidNode = () => true;

const MultiColumnText = styled(props => {
  return (
    <AnimateIntoView>
      <Row gutter={20}>
        {props.columns.map((column, index) => {
          const processingInstructions = [
            {
              shouldProcessNode: node => {
                return column.hasBlock &&
                  node.parent &&
                  node.parent.name &&
                  node.parent.name === 'p';
              },
              processNode: (node, children) => (
                <React.Fragment>
                  <TextSquare />
                  {node.data}
                </React.Fragment>
              )
            },
            {
              shouldProcessNode: node => {
                return true;
              },
              processNode: processNodeDefinitions.processDefaultNode
            }
          ];

          const reactComponent = htmlToReactParser.parseWithInstructions(
            column.text,
            isValidNode,
            processingInstructions
          );
          const reactHtml = ReactDOMServer.renderToStaticMarkup(reactComponent);

          return (
            <Col key={index} xs={24} md={6}>
              <div className={props.className}>
                <div dangerouslySetInnerHTML={{
                  __html: reactHtml,
                }} />
              </div>
            </Col>
          );
        })}
      </Row>
    </AnimateIntoView>
  );
})`
  > p + p {
  	margin-top: 20px;
  }
`;

MultiColumnText.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
  	hasBlock: PropTypes.bool,
  	text: PropTypes.string.isRequired,
  })),
};

export default MultiColumnText;