import React from 'react';
import ReactDOM from 'react-dom';
import { Quiz } from './Quiz';

it('renders without crashing', () => {
  const root = document.createElement('div');
  ReactDOM.render(<Quiz />, root);
});

// either import quizzes or make dummy data
// test handleClick is properly changing the element with correct or incorrect
