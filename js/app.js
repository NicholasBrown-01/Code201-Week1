//DECLARE STRICT MODE TO PREVENT UNINTENTIONAL VARIABLES
'use strict';

// Introduction Prompt

function userName() {
  let name = prompt('Welcome, what is your name?');
  console.log('The user entered: ' + name);

  if (name && name.length >= 1) {
    window.alert('Wonderful to have you ' + name + ', please feel free to read about me on this site.');
    window.alert('But first, let me ask you five fun questions you can guess about me.');

  } else if (!name) {
    alert('You did not enter a valid name.');
    userName();
    return name;
  }
}

userName();

// User Question 1

function questionOne() {
  let answer = prompt('Do I like dogs? (Please answer "Yes", "No", "Y", or "N" in the input box below.');

  if (!answer) {
    alert('Please try your answer again');
    questionOne();
  }

  let answerLower = answer.toLowerCase();
 // console.log('This is just here to prevent an error: ' + answerLower);

  if (answerLower === 'yes' || answerLower === 'no' || answerLower === 'y' || answerLower === 'n') {
    console.log('Answer: ' + answerLower);

  } else {
    alert('Please try your answer again');
    questionOne();
    return answerLower;
  }
}

questionOne();
