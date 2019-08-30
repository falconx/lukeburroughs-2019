import styled from 'styled-components';

// Todo: Deprecate for VerticalSpacing?
const Spacer = styled.div`
  height: 70px;

  ${props => props.theme.query.md} {
    height: 140px;
  }
`;

export default Spacer;