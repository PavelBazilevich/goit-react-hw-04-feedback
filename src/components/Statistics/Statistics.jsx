import PropTypes from 'prop-types';
import React from 'react';

export const Statistics = ({ feedback, total, percentage }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        {Object.entries(feedback).map(([key, value]) => {
          return (
            <li key={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
            </li>
          );
        })}
        <li>Total: {total}</li>
        <li>Positive feetback: {percentage}%</li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  feedback: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
