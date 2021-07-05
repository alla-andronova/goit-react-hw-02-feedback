import React from 'react';
import PropTypes from 'prop-types';
import Section from '../section/Section';

const Statistics = ({ feedbacks, total, positivePercentage }) => {
  return (
    <Section title="Statistics">
      <ul>
        {Object.entries(feedbacks).map(([k, v]) => (
          <li key={k}>
            {k} : {v}
          </li>
        ))}
        <li>Total : {total}</li>
        <li>Positive Feedback : {positivePercentage}%</li>
      </ul>
    </Section>
  );
};

Statistics.propTypes = {
  feedbacks: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
