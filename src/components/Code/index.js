import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { topics } from '../topics';

const Code = ({ selectedTopic }) => {

  const getCodeSnipped = () => {
    const snipped = topics[selectedTopic].component;

    return `${snipped}`;
  }

  return (
    <React.Fragment>
      <header>Code</header>
      <SyntaxHighlighter lineNumberStyle language="javascript" style={dracula}>
        {getCodeSnipped()}
      </SyntaxHighlighter>
    </React.Fragment>
  );
}

export default Code;
