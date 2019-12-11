import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeSnippet = ({ stringCode }) => {
  return (
    <SyntaxHighlighter lineNumberStyle language="javascript" style={dracula}>
      {stringCode}
    </SyntaxHighlighter>
  );
};

CodeSnippet.propTypes = {
  stringCode: PropTypes.string
};

CodeSnippet.defaultProps = {
  stringCode: ''
};

export default CodeSnippet;
