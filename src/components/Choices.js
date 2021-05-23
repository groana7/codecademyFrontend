import React, { useState, useEffect } from 'react';
import { Choice } from './Choice';

export const Choices = (props) => {
  const [shuffled, setShuffled] = useState([]);
  const { correctAnswer, incorrectAnswers } = props.question;
  const choices = [correctAnswer, ...incorrectAnswers];

  const shuffleChoices = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[randomIndex];
      arr[randomIndex] = temp;
    }
    return arr;
  };

  useEffect(() => {
    const fetchData = async () => {
      const shuffled = shuffleChoices(choices);
      setShuffled(shuffled);
    };
    fetchData();
  }, [props.question]);

  return (
    <ol type="A">
      {shuffled.map((choice, idx) => (
        <Choice
          key={idx}
          choice={choice}
          selected={props.currentAnswer === choice}
          handleClick={props.handleClick}
        />
      ))}
    </ol>
  );
};
