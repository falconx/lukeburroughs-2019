import styled from 'styled-components';

const Constrain = styled.div`
  position: relative;
  padding: 0 10px;
  margin: 0 auto;
  max-width: ${props => props.theme.layout.constrain}px;

  ${props => props.theme.query.md} {
    padding: 0 30px;
  }
`;

export default Constrain;