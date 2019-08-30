import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Heading = ({ headingLevel, ...props }) => React.createElement(`h${headingLevel}`, props);

Heading.propTypes = {
  headingLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  type: PropTypes.oneOf(['main', 'caption']).isRequired,
};

export default styled(Heading)`
  ${props => props.type === 'main' && `
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -1.8px;
    margin-bottom: 10px;

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

    &::before {
      content: '';
      display: inline-block;
      vertical-align: baseline;
      height: 1em;
      width: 1em;
      margin-right: 5px;
      background-color: currentColor;
    }
  `}
`;