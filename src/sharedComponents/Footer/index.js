import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Footer } from './styled';


const FooterContent = ({ children, links }) => (
  <Footer className="mt-5 p-3">
    {children && children}
    {!children && links.length > 0 &&
      <React.Fragment>
        <span>References: </span>
        {links.map((link) => (
          <a
            key={link.text}
            href={link.link}
            title={link.title}
          >{link.text}</a>
        ))}
      </React.Fragment>
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
