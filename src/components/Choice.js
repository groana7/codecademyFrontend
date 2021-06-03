import React from 'react';

export const Choice = (props) => {
  let classes = ['choice'];

  if (props.isChoiceSelected) {
    classes.push('selected');
    if (
      props.selected &&
      props.currentAnswer !== props.question.correctAnswer
    ) {
      classes.push('incorrect');
    } else if (props.isCorrect) {
      classes.push('correct');
    }
  }

  return (
    <li className={classes.join(' ')} onClick={props.handleClick}>
      {props.choice}
    </li>
  );
};
