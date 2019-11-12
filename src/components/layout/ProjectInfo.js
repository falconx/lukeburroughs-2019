import React from 'react';
import PropTypes from 'prop-types';

const ProjectInfo = () => (
  <div>Todo</div>
);

ProjectInfo.propTypes = {
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
};

export default ProjectInfo;