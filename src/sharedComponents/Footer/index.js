import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Footer } from './styled';


const FooterContent = ({ children, links }) => (
  <Footer>
    {children && children}
    {!children && links.length > 0 &&
      links.map((link) => (
        <a
          key={link.text}
          href={link.link}
          title={link.title}
        >{link.text}</a>
      ))
    }
  </Footer>
);

FooterContent.propTypes = {
  children: PropTypes.node,
  links: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
  }))
};

FooterContent.defaultProps = {
  links: [{ link: '', text: '', title: '' }]
};

export default FooterContent;
