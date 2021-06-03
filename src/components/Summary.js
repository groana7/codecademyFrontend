import React from 'react';
import { getMessage } from '../data/messages';

export const Summary = (props) => {
  return (
    <div>
      <h2>{props.quizTitle}</h2>
      <h3>
        You got <span>{props.totalCorrect}</span> out of{' '}
        <span>{props.totalQuestions}</span> right.
      </h3>
      <div>{getMessage()}</div>
      <h3>You had: </h3>
      <ol className="questions">{props.renderSummaryData()}</ol>
      <button className="btn btn-primary" onClick={props.takeNextQuiz}>
        Next Quiz
      </button>
    </div>
  );
};
