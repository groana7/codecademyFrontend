import React from 'react';

export const Summary = (props) => {
  return (
    <div>
      <h2>Summary</h2>
      <ul>{props.renderSummaryData()}</ul>
      <button className="btn btn-primary" onClick={props.retake}>
        Retake
      </button>
      <button
        className="btn btn-primary"
        // onClick={restart}
      >
        Next Quiz
      </button>
    </div>
  );
};
