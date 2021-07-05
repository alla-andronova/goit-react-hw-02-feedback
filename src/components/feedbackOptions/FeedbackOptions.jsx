import React from 'react';
import PropTypes from 'prop-types';
import Section from '../section/Section';

const FeedbackOptions = ({ feedbacks, handleOnClick }) => {
  return (
    <Section title="Please leave feedback">
      {Object.entries(feedbacks).map(([k]) => (
        <button key={k} type="button" name={k} onClick={handleOnClick}>
          {k}
        </button>
      ))}
    </Section>
  );
};

FeedbackOptions.propTypes = {
  feedbacks: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  handleOnClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
