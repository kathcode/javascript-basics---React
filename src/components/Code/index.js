import React from 'react';
import PropType from 'prop-types';

import { topics } from '../topics';

const Code = ({ selectedTopic }) => {
  const Topic = topics[selectedTopic].component;

  return (
    <React.Fragment>
      <header>Definition</header>
      <Topic />
    </React.Fragment>
  );
};

Code.propTypes = {
  selectedTopic: PropType.string.isRequired
};

export default Code;
