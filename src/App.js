import React, { useState } from 'react';

import Menu from './components/Menu';
import Code from './components/Code';

const App = () => {
  const [selectedTopic, setSelectedTopic] = useState('apply');

  const handleClickItem = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <React.Fragment>
      <header className="mb-5"><h2>Fundaments of Javascript - By Kath_Code</h2></header>
      <main className="container-fluid">
        <article className="row">
          <section className="col-md-4">
            <Menu selectedTopic={selectedTopic} handleClickItem={handleClickItem} />
          </section>

          <section className="col-md-8">
            <Code selectedTopic={selectedTopic} />
          </section>
        </article>
      </main>
    </React.Fragment>
  );
};

export default App;
