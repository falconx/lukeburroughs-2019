import styled from 'styled-components';

const TextSquare = styled.span`
  &::before {
    content: '';
    display: inline-block;
    vertical-align: baseline;
    height: 1em;
    width: 1em;
    margin-right: 5px;
    background-color: currentColor;
  }
`;

export default TextSquare;