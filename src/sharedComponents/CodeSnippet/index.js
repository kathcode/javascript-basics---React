import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeSnippet = ({ stringCode }) => {
  return (
    <SyntaxHighlighter lineNumberStyle language="javascript" style={dracula}>
      {stringCode}
    </SyntaxHighlighter>
  )
}

export default CodeSnippet