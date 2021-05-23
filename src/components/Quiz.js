import React, { useState } from 'react';
import { Progress } from './Progress';
import { Question } from './Question';
import { Choices } from './Choices';
import { Summary } from './Summary';
import { quizzes } from '../data/quizzes';

export const Quiz = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState('');
  const [showSummary, setShowSummary] = useState(false);
  // TODO: CHECK IF THIS IS REDUNDANT
  // const [isSelected, setIsSelected] = useState(false);

  // NOTE: SHOULD THESE NOT BE HARD CODED?
  // NOTE: IDEALLY I WOULD JUST SAY AFTER EACH QUIZ SHOW SUMMARY, THEN CLICK TO GO TO NEXT QUIZ
  const htmlQuiz = quizzes[0];
  const cssQuiz = quizzes[1];

  const htmlQues = htmlQuiz.questions;
  const cssQues = cssQuiz.questions;

  // TODO: CHANGE THIS FUNCTIONALITY TO THE NEXT BUTTON INSTEAD
  const handleClick = (evt) => {
    // TODO: HOW TO GRAB THE CLASS TO CHECK IF IT IS SELECTED
    // console.log('QUIZ HANDLE CLICK', evt.target.class);
    setCurrentAnswer(evt.target.innerText);
    setError('');
  };

  const renderError = () => {
    if (!error) return;
    return <div className="error">{error}</div>;
  };

  const renderSummaryResult = (question, answer) => {
    if (question.correctAnswer === answer.currentAnswer) {
      return <span className="correct">Correct</span>;
    }
    return <span className="incorrect">Incorrect</span>;
  };

  const renderSummaryData = () => {
    // NOTE: RETURNING FUNC WITH ALL DIVS
    // NOTE: INDEX IN ANSEWRS AND QUIZ QUESTIONS (HTML QUIZ) ACTS AS A UNIQUE ID FOR A QUESTION
    return answers.map((answer, index) => {
      const question = htmlQues.find(
        (question, idx) => idx === answer.questionId,
      );
      return (
        <div key={index}>
          {question.text}: {renderSummaryResult(question, answer)}
        </div>
      );
    });
  };

  const retake = () => {
    setCurrentQuiz(0);
    setCurrentQuestion(0);
    setCurrentAnswer('');
    setAnswers([]);
    setShowSummary(false);
  };

  const takeNextQuiz = () => {
    setCurrentQuiz(1);
  };

  const next = () => {
    const answer = { questionId: currentQuestion, currentAnswer };

    if (!currentAnswer) {
      setError('Please select an option');
      return;
    }
    answers.push(answer);
    setAnswers(answers);
    setCurrentAnswer('');

    if (currentQuestion + 1 < htmlQues.length) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }

    // NOTE: if at last question show summary
    setShowSummary(true);
  };

  if (showSummary) {
    return (
      <div className="container summary">
        <Summary
          // TODO: REF SYNTAX TO AVOID REPEITION
          retake={retake}
          takeNextQuiz={takeNextQuiz}
          renderSummaryData={renderSummaryData}
        />
      </div>
    );
  } else {
    return (
      <div>
        <Progress
          totalQuizzes={quizzes.length}
          currentQuiz={currentQuiz + 1}
          totalQuestions={htmlQues.length}
          currentQuestion={currentQuestion + 1}
        />
        <Question question={htmlQues[currentQuestion].text} />
        {renderError()}
        <Choices
          question={htmlQues[currentQuestion]}
          currentAnswer={currentAnswer}
          handleClick={handleClick}
        />
        {/* TODO: MAKE THIS BUTTON APPEAR AFTER CLICKING; PLACE IN IT'S OWN COMPONENT */}
        <button className="btn btn-primary" onClick={next}>
          Next
        </button>
      </div>
    );
  }
};
