import styles from './Filter.module.css';
import React from 'react';
import PropTypes from 'prop-types';
class Filter extends React.Component {
  render() {
    const { onChange } = this.props;
    const { filterField, filterText, filterInput } = styles;
    return (
      <div className={filterField}>
        <p className={filterText}>Find contact by name</p>
        <input className={filterInput} type="text" onChange={onChange} />
      </div>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func
};

export default Filter;