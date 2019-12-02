import React from 'react';

import { topics } from '../topics';

const Code = ({ selectedTopic }) => {
  const Topic = topics[selectedTopic].component;

  return (
    <React.Fragment>
      <header>Definition</header>
      <Topic />
    </React.Fragment>
  );
}

export default Code;
