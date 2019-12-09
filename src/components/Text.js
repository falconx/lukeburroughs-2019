import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TextSquare from './TextSquare';
import ConditionalWrap from './ConditionalWrap';

const Text = ({ headingLevel, ...props }) => (
  <span className={props.className}>
    <ConditionalWrap
      condition={props.type === 'caption'}
      wrap={children => (
        <TextSquare children={children} />
      )}
      children={props.children}
    />
  </span>
);

Text.propTypes = {
  type: PropTypes.oneOf(['main', 'secondary', 'caption']).isRequired,
};

export default styled(Text)`
  ${props => props.type === 'main' && `
    font-size: 3.125rem;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -1.8px;

    ${props.theme.query.md} {
      font-size: 4.375rem;
    }

    ${props.theme.query.lg} {
      font-size: 8.125rem;
    }
  `}

  ${props => props.type === 'secondary' && `
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -1.8px;

    ${props.theme.query.md} {
      font-size: 3.125rem;
    }

    ${props.theme.query.lg} {
      font-size: 4.375rem;
    }
  `}

  ${props => props.type === 'caption' && `
    font-size: 1.25rem;
    font-weight: normal;
    letter-spacing: -0.4px;
  `}
`;