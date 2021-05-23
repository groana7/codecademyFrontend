# TO DO

Create a multiple choice quiz
Should be responsive
Generally style it like the mockups
Create unit tests

- CONSIDERATIONS

  - Does the user choose which quiz they take or are they taken in order?
    - No "Your code will allow the user to take each of those quizzes in order."
  - Can I adjust the data for randomization?

- QUIZ COMPONENT

  SubComponents:

  - PROGRESS COMPONENT

    - shows the amount of questions for quiz
    - shows the quiz they're on

  - QUESTION COMPONENT

  - CHOICES COMPONENT

    - important that answers and correct answers are in a randomized order
    - can do so by pushing them into an array then randomizing them

    - ANSWER COMPONENT

  - NEXT BUTTON
    - only shows up when a question is selected
    - correct or incorrect is shown above the button
    - the correct answer is underlined
    - if incorrect:
      - outlined selected in red
      - the selected answer has a strikethrough

- SUMMARY SCREEN

  - shows up after the final question is answered and next button is pressed
  - How many questions were in the quiz
  - How many of those questions were answered correctly
  - OPTION 2: show a list of he quiz's question with the user's selected answer and whether it was correct beside each question
  - A button to move to the next quiz (or the first quiz, if they just took the last)
  - A random encouragement message (use getMessage from src/data/messages.js).

  - OPTION 1: RETAKE QUIZ BUTTON
    - shows how many times the quiz has been taken
    - ability to retake the previous quiz
