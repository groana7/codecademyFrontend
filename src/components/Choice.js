import React from 'react';

// TODO: LIFT CLASSES TO TRIGGER NEXT BUTTON
export const Choice = (props) => {
  // NOTE: use a CSS class to show the user which one is selected
  let classes = ['choice'];
  if (props.selected) classes.push('selected');

  return (
    <li className={classes.join(' ')} onClick={props.handleClick}>
      {props.choice}
    </li>
  );
};
