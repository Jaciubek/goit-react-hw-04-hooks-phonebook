import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

// export const Notification = ({ message }) => {
//   const { notif__msg } = styles;

//   return <p className={notif__msg}>{message}</p>;
// };

class Notification extends React.Component {
  render() {
    const { message } = this.props;
    const { notif__msg } = styles;
    return (
      <p className={notif__msg}>{message}</p>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;