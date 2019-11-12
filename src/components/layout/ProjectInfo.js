import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProjectInfo = styled(props => (
  <div>Todo</div>
))`
  margin: 70px 0;

  ${props => props.theme.query.sm} {
    margin: 140px 0;
  }
`;

ProjectInfo.propTypes = {
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
};

export default ProjectInfo;