import { useState } from 'react';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import css from 'components/Section/Section.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedback = { good, neutral, bad };

  const hendleChange = options => {
    switch (options) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const total = good + neutral + bad;
  const countPositiveFeedbackPercentage = () => {
    return Math.trunc((good / total) * 100);
  };

  return (
    <div className={css.section}>
      <Section />
      <FeedbackOptions
        hendleChange={hendleChange}
        options={{ good, neutral, bad }}
      />

      {total ? (
        <Statistics
          feedback={feedback}
          total={total}
          percentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
};
