import React, { useState } from 'react';
import { CardItem } from './index.styled';

import { topics } from '../topics'

const Menu = ({ handleClickItem, selectedTopic }) => {
  return (
    <React.Fragment>
      <header>Menu</header>
      <nav>
        {Object.keys(topics).map((topic) => (
          <CardItem
            key={topic}
            onClick={() => handleClickItem(topic)}
            active={selectedTopic === topic}
          >
            {topics[topic].text}
          </CardItem>
        ))
        }
      </nav>
    </React.Fragment>
  );
}

export default Menu;