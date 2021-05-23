import React from 'react';

export const Progress = (props) => {
  return (
    <div>
      {/* <h2>
        Quiz: {props.currentQuestion} of {props.totalQuizzes}
      </h2> */}
      <h2>
        Question: {props.currentQuestion} of {props.totalQuestions}
      </h2>
    </div>
  );
};
