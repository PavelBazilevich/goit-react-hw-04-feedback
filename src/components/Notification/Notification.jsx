import React from 'react';
import css from 'components/Notification/Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
      <div className={css.rotate_shadows}></div>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
