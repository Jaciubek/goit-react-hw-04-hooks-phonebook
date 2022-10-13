import styles from './Section.module.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Section extends Component {
  render() {
    const { sectionHead } = styles;
    const { title, children } = this.props;
    return (
      <section>
        <h2 className={sectionHead}>{title}</h2>
        {children}
      </section>
    );
  }
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default Section;

