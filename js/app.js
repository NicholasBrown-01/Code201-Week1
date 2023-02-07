//DECLARE STRICT MODE TO PREVENT UNINTENTIONAL VARIABLES
'use strict';

// Introduction Prompt
let aName = '';

function userName() {
  aName = prompt('Welcome, what is your name?');
  console.log('The user entered: ' + aName);

  if (aName && aName.length >= 1) {
    window.alert('Wonderful to have you ' + aName + ', please feel free to read about me on this site.');
    window.alert('But first, let me ask you five fun questions you can guess about me.');

  } else if (!aName) {
    alert('You did not enter a valid name.');
    userName();
  }

}

userName();

// Question 1: "Do I like Dogs?"

function questionOne() {
  let answer = prompt('Do I like dogs? (Please answer "Yes", "No", "Y", or "N" in the input box below.');

  if (!answer) {
    alert('Please try your answer again');
    questionOne();
  }

  let answerLower = answer.toLowerCase();
  console.log('This is just here to prevent an error: ' + answerLower);

  if (answerLower === 'yes' || answerLower === 'y') {
    console.log('Answer yes: ' + answerLower);
    alert('You are correct!');

  } else if (answerLower === 'no' || answerLower === 'n') {
    console.log('Answer no: ' + answerLower);
    alert('Sorry but I DO like dogs!');

  } else {
    alert('Please try your answer again');
    questionOne();
  }
  return answerLower;
}

questionOne();

// Question 2: "Do I live in the city?"

function questionTwo() {
  let answer = prompt('Do I live in the city? (Please answer "Yes", "No", "Y", or "N" in the input box below.');

  if (!answer) {
    alert('Please try your answer again');
    questionTwo();
  }

  let answerLower = answer.toLowerCase();
  console.log('This is just here to prevent an error: ' + answerLower);

  if (answerLower === 'yes' || answerLower === 'y') {
    console.log('Answer yes: ' + answerLower);
    alert('Nope! I live in the country on over 30 Acres!');

  } else if (answerLower === 'no' || answerLower === 'n') {
    console.log('Answer no: ' + answerLower);
    alert('Correct! I live in the country on over 30 Acres!');

  } else {
    alert('Please try your answer again');
    questionTwo();
  }
  return answerLower;
}

questionTwo();



// Question 3: "Do I raise animals?"

function questionThree() {
  let answer = prompt('Do I raise animals? (Please answer "Yes", "No", "Y", or "N" in the input box below.');

  if (!answer) {
    alert('Please try your answer again');
    questionThree();
  }

  let answerLower = answer.toLowerCase();
  console.log('This is just here to prevent an error: ' + answerLower);

  if (answerLower === 'yes' || answerLower === 'y') {
    console.log('Answer yes: ' + answerLower);
    alert('Absolutely! I have raised Pigs, Goats, Chickens, Turkeys, Cows, and Dogs!');

  } else if (answerLower === 'no' || answerLower === 'n') {
    console.log('Answer no: ' + answerLower);
    alert('Sorry! I have had several! Pigs, Goats, Chickens, Turkeys, Cows, and Dogs!');

  } else {
    alert('Please try your answer again');
    questionThree();
  }
  return answerLower;
}

questionThree();


// Question 4: "Do I have a family?"

function questionFour() {
  let answer = prompt('Do I have a family? (Please answer "Yes", "No", "Y", or "N" in the input box below.');

  if (!answer) {
    alert('Please try your answer again');
    questionFour();
  }

  let answerLower = answer.toLowerCase();
  console.log('This is just here to prevent an error: ' + answerLower);

  if (answerLower === 'yes' || answerLower === 'y') {
    console.log('Answer yes: ' + answerLower);
    alert('I sure do! I have an amazing wife and 4 children.');

  } else if (answerLower === 'no' || answerLower === 'n') {
    console.log('Answer no: ' + answerLower);
    alert('Wrong! I have an amazing wife and 4 children.');

  } else {
    alert('Please try your answer again');
    questionFour();
  }
  return answerLower;
}

questionFour();


// Question 5: "Am I a good coder?"

function questionFive() {
  let answer = prompt('Am I a good coder? (Please answer "Yes", "No", "Y", or "N" in the input box below.');

  if (!answer) {
    alert('Please try your answer again');
    questionFive();
  }

  let answerLower = answer.toLowerCase();
  console.log('This is just here to prevent an error: ' + answerLower);

  if (answerLower === 'yes' || answerLower === 'y') {
    console.log('Answer yes: ' + answerLower);
    alert('You are too kind! This took forever to figure out!');

  } else if (answerLower === 'no' || answerLower === 'n') {
    console.log('Answer no: ' + answerLower);
    alert('Ha well I also think I have a looooong way to go!');

  } else {
    alert('Please try your answer again');
    questionFive();

  }
  return answerLower;
}

questionFive();

alert('Thank you for taking the time ' + aName + ' to get to know me better. I hope you enjoy the rest of your time on this site!');
