import React from 'react';
import CodeSnippet from '../../../sharedComponents/CodeSnippet';

// Snippet
import { localScope, globalScope } from './snippets';

const Scope = () => (
  <React.Fragment>
    <section>
      <h1>Scope</h1>
      <article>
        Is the current context of the execution.
        Determines the accessibility (visibility) of variables.
        there are two types of scope:
        <ul>
          <li>local</li>
          <li>global</li>
        </ul>
      </article>
    </section>

    <section>
      <h2>Local scope</h2>
      <article>
        <p>
          The variable date is defined in the function, so you just can use it inside the function.
        </p>
        <CodeSnippet stringCode={`${localScope}`} />
      </article>
    </section>

    <section>
      <h2>Global scope</h2>
      <article>
        <p>
          The variable months are defined outside the currentMonth function, And you can use it outside or inside the function.
        </p>
        <CodeSnippet stringCode={`${globalScope}`} />
      </article>
    </section>
  </React.Fragment>
);

export default Scope;
