//DECLARE STRICT MODE TO PREVENT UNINTENTIONAL VARIABLES
'use strict';

// Introduction Prompt & userScore
let userScore = 0;
let aName = '';

function userName() {
  aName = prompt('Welcome, what is your name?');

  if (aName && aName.length >= 1) {
    window.alert('Wonderful to have you ' + aName + ', please feel free to read about me on this site.');
    window.alert('But first, let me ask you 7 fun questions you can guess about me.');

  } else if (!aName) {
    alert('You did not enter a valid name.');
    userName();
  }

}

userName();

// Question 1: "Do I like Dogs?"

function questionOne() {
  let answer = prompt('Do I like dogs? (Please answer "Yes", "No", "Y", or "N" in the input box below.');

  let answerLower;

  if (answer) {
    answerLower = answer.toLowerCase();
  }

  if (answerLower === 'yes' || answerLower === 'y') {
    alert('You are correct!');
    userScore++;

  } else if (answerLower === 'no' || answerLower === 'n') {
    alert('Sorry but I DO like dogs!');

  } else {
    alert('Please try your answer again');
    questionOne();
  }

}

questionOne();

// Question 2: "Do I live in the city?"

function questionTwo() {
  let answer = prompt('Do I live in the city? (Please answer "Yes", "No", "Y", or "N" in the input box below.');

  let answerLower;

  if (answer) {
    answerLower = answer.toLowerCase();
  }

  if (answerLower === 'yes' || answerLower === 'y') {
    alert('Nope! I live in the country on over 30 Acres!');

  } else if (answerLower === 'no' || answerLower === 'n') {
    alert('Correct! I live in the country on over 30 Acres!');
    userScore++;

  } else {
    alert('Please try your answer again');
    questionTwo();
  }

}

questionTwo();



// Question 3: "Do I raise animals?"

function questionThree() {
  let answer = prompt('Do I raise animals? (Please answer "Yes", "No", "Y", or "N" in the input box below.');

  let answerLower;

  if (answer) {
    answerLower = answer.toLowerCase();
  }

  if (answerLower === 'yes' || answerLower === 'y') {
    alert('Absolutely! I have raised Pigs, Goats, Chickens, Turkeys, Cows, and Dogs!');
    userScore++;

  } else if (answerLower === 'no' || answerLower === 'n') {
    alert('Sorry! I have had several! Pigs, Goats, Chickens, Turkeys, Cows, and Dogs!');

  } else {
    alert('Please try your answer again');
    questionThree();
  }

}

questionThree();


// Question 4: "Do I have a family?"

function questionFour() {
  let answer = prompt('Do I have a family? (Please answer "Yes", "No", "Y", or "N" in the input box below.');

  let answerLower;

  if (answer) {
    answerLower = answer.toLowerCase();
  }
  if (answerLower === 'yes' || answerLower === 'y') {
    alert('I sure do! I have an amazing wife and 4 children.');
    userScore++;

  } else if (answerLower === 'no' || answerLower === 'n') {
    alert('Wrong! I have an amazing wife and 4 children.');

  } else {
    alert('Please try your answer again');
    questionFour();
  }

}

questionFour();


// Question 5: "Am I a good coder?"

function questionFive() {
  let answer = prompt('Am I a good coder? (Please answer "Yes", "No", "Y", or "N" in the input box below.');

  let answerLower;

  if (answer) {
    answerLower = answer.toLowerCase();
  }

  if (answerLower === 'yes' || answerLower === 'y') {
    alert('You are too kind! This took forever to figure out!');
    userScore++;

  } else if (answerLower === 'no' || answerLower === 'n') {
    alert('Ha well I also think I have a looooong way to go!');
    userScore++;

  } else {
    alert('Please try your answer again');
    questionFive();

  }

}

questionFive();

alert('Thank you for taking the time ' + aName + ' to get to know me better. I hope you enjoy the rest of your time on this site! But first here are 2 more questions!');

// Question 6: Guess a number game

function numberGuessingGame() {

  let numOfGuesses = 4;
  let correctNumber = 5;


  while (numOfGuesses) {

    let userGuess = prompt('Guess what number I am thinking of? (1-10)');
    let comparedNumber = +(userGuess);

    if (comparedNumber === correctNumber) {
      alert(`Congratulations! You picked the number ${correctNumber}!`);
      userScore++;
      break;

    } else if (numOfGuesses === 1) {
      alert(`Attempts Up...the number was ${correctNumber}!`);
      break;

    } else if (comparedNumber > 5) {
      alert('Too high!');
      numOfGuesses--;
      alert(`You have ${numOfGuesses} left!`);

    } else {
      (comparedNumber < 5);
      alert('Too low!');
      numOfGuesses--;
      alert(`You have ${numOfGuesses} left!`);

    }
  }
}

numberGuessingGame();


// Question 7: Multiple Answer Array Game

// Variable & Array creation

let attempts = 6;


function favoriteFoodsGame() {

  let foods = ['pizza', 'cookies', 'french fries', 'cake', 'salad', 'wings', 'pasta', 'ice cream', 'soup', 'chicken', 'steak', 'fish', 'shrimp', 'seafood', 'bbq'];
  let foodDisplay = foods.join(', ');

  alert('On the following prompts, please guess some of my favorite foods! You will have 6 tries!');

  // Start of Prompt Loop

  for (let i = 0; i < 6; i++) {

    let userGuesses = prompt(`${attempts} foods left to guess!`).toLowerCase();

    // If what the User guess is IN the Food Array...and take away an attempt

    if (foods.includes(userGuesses)) {
      alert(`Yes! ${userGuesses} is a favorite food!`);
      userScore++;
      attempts--;
      foods = foods.filter(element => element !== userGuesses);

    // If the User guess is NOT in the Food Array do this...and take away an attempt
    } else {
      alert(`Unfortunately ${userGuesses} is NOT a favorite...`);
      attempts--;
    }
  }

  // All possible items in Food Array are Displayed

  alert(`Here are the possible correct foods: ${foodDisplay}!`);

  // Display the Users corrected amount of guesses

  if (userScore > 1) {
    alert(`Hey ${aName}! Looks like you got ${userScore} correct out of ALL the questions! Great job!`);
  }

  if (userScore < 1) {
    alert(`Wow ${aName}! You got ${userScore} right over all the questions, that's terrible.`);
  }
}

favoriteFoodsGame();
