import PropTypes from 'prop-types';
import styled from 'styled-components';

const SPACING_UNIT = 10; // px

const VerticalSpacing = styled.div`
  margin-bottom: ${props => props.size * SPACING_UNIT}px;
`;

VerticalSpacing.propTypes = {
  size: PropTypes.number.isRequired,
};

export default VerticalSpacing;