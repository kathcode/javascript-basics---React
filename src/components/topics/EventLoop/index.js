import React from 'react';
import CodeSnippet from '../../../sharedComponents/CodeSnippet';

// Assets
import EventLoopImageYoutube from '../../../assets/eventloop.PNG';
import EventLoopImage from '../../../assets/eventloop2.png';

// Snippet
import { basicExample } from './snippets';

// Shared components
import Footer from '../../../sharedComponents/Footer';

const eventLoop = () => {
  return (
    <React.Fragment>
      <section>
        <h1>The event loop</h1>
        <article>
          <p>
            Javascript runs as a single threaded. Just one thing happen at the time.
          </p>
          <p>
            In principle, any task that has been delegated to the browser through a callback,
            must wait until all the instructions of the main program have been executed.
            For this reason, the waiting time defined in functions such as setTimeout,
            does not guarantee that the callback is executed in that time exactly,
            but at any time thereafter, only when the task queue has been emptied.
          </p>
        </article>
        <CodeSnippet stringCode={`${basicExample}`} />
      </section>

      <section>
        <h2 className="mt-5 mb-5">The actors of event loop process</h2>
        <h3>The call stack</h3>
        <article>
          <p>
            The single thread provided for JavaScript code execution. Is a place in memory that <strong>keep track the function that need to be executed</strong>, Each function is placed in the top of the previous function. (First in, last out).
          </p>
        </article>
      </section>

      <section>
        <h3>Web API</h3>
        <article>
          <p>
            Is not part of Javascript, instead it provide method like: setTimeout(), alert() that can be used by the program in Javascript.
          </p>
        </article>
      </section>

      <section>
        <h3>The message queue</h3>
        <article>
          <p>
            Is a list of messages waiting to be executed. A new message is added when an event that has listener is triggered.
          </p>
        </article>
      </section>

      <section>
        <h3>The event loop</h3>
        <article>
          <p>
            Is a <strong>process</strong> that keep running to check if the stack is empty or not. If the stack is empty it move the first message in the queue to the stack for execution.
          </p>
        </article>
      </section>

      <h2 className="mt-5 mb-5">Event loop examples</h2>

      <section className="mb-4">
        <div className="mb-4">
          <h4>MDN Example</h4>
          <img src="https://developer.mozilla.org/files/4617/default.svg" alt="MDN Example" />
        </div>
        <div className="mb-4">
          <h4>The actors</h4>
          <img src={EventLoopImageYoutube} className="img-fluid" alt="Event loop" />
          <a
            href="https://youtu.be/8aGhZQkoFbQ?t=769"
            target="_blank"
            rel="noopener noreferrer"
            title="Event loop">Take a look to the event loop running here.
          </a>
        </div>
        <div className="mb-4">
          <h4>Interaction of the actors</h4>
          <img src={EventLoopImage} className="img-fluid" alt="Event loop" />
        </div>
      </section>

      <Footer className="mt-5 p-3">
        <span>References: </span>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop"
          title="MDN reference"
        >MDN, </a>
        <a
          href="https://dev.to/kapantzak/js-illustrated-the-event-loop-4mco"
          title="DEV reference"
        >Dev, </a>
        <a
          href="https://www.youtube.com/watch?v=8aGhZQkoFbQ"
          title="YOUTUBE reference"
        >You tube</a>
      </Footer>
    </React.Fragment>
  );
};

export default eventLoop;