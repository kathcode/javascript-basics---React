import React from 'react';
import CodeSnippet from '../../../sharedComponents/CodeSnippet';

// Snippet
import { basicExample } from './snippets';

const Comments = () => {
  return (
    <React.Fragment>
      <section>
        <h1>Comments</h1>
        <CodeSnippet stringCode={`${basicExample}`} />
      </section>
    </React.Fragment>
  );
};

export default Comments;