'use strict';
console.log ('I\'m alive');

/*
About Colleen

Does Colleen like wasabi? no
Is Colleen Irish? yes
Can Colleen sing? no
Does Colleen like to climb mountains? yes
Does Colleen like to code? yes
*/

//==================Quesitions 1-6============================//
var userName = prompt('What is your name?');
alert('Hello, ' + userName + '. Welcome!');
var wasabiQuestion = prompt('Does Colleen like wasabi?').toLowerCase();
if (wasabiQuestion === 'yes' || wasabiQuestion === 'y') {
  // console.log('You are wrong!')
  alert('You are wrong!');
} else if (wasabiQuestion === 'no' || wasabiQuestion === 'n') {
  // console.log('You are correct!');
  alert('You are correct!');
} else {
  alert('Choose yes or no');
}
var irishQuestion = prompt('Is Colleen Irish?').toLowerCase();
if (irishQuestion === 'yes' || irishQuestion === 'y') {
  // console.log('Sure and Begorrah!')
  alert('Sure and Begorrah!');
} else if (irishQuestion === 'no' || irishQuestion === 'n') {
  // console.log('O\'wrong!');
  alert('O\'wrong!');
} else {
  alert('Choose yes or no');
}

var singQuestion = prompt('Can Colleen sing?').toLowerCase();
if (singQuestion === 'yes' || singQuestion === 'y') {
  // console.log('You are off-tune')
  alert('You are off-tune!');
} else if (singQuestion === 'no' || singQuestion === 'n') {
  // console.log('You are on-key!')//
  alert('You are on-key!');
} else {
  alert('Choose yes or no');
}
var climbQuestion = prompt('Does Colleen like to climb mountain?').toLowerCase();
if (climbQuestion === 'yes' || climbQuestion === 'y') {
  // console.log('You are on the right trail!')
  prompt('You are on the right trail!');
} else if (climbQuestion === 'no' || climbQuestion === 'n') {
  // console.log('Wrong way')//
  alert('Wrong way');
} else {
  alert('Choose yes or no');
}
var codeQuestion = prompt('Does Colleen like to code?').toLowerCase();
if (codeQuestion === 'yes' || codeQuestion === 'y') {
  //console.log('TRUE')
  prompt('TRUE');
} else if (codeQuestion === 'no' || codeQuestion === 'n') {
  // console.log('FALSE!')//
  alert('FALSE!');
} else {
  alert('Choose yes or no');
}


//==========Question 6============================================//

//loop 4 times
for (var i = 0; i < 4; i++) {
  var howManySibs = prompt('How many siblings does Colleen have?');
  parseInt(howManySibs);
  if (howManySibs === 4){
    console.log('Ding, Ding, Ding - Correct!');//
    alert('Ding, Ding, Ding - Correct!');
    i = 4; //exits loop after correct answer
  } else if (howManySibs <= 3) {
    console.log('Too low. Give it another shot.');
    alert('Too low. Give it another shot.');
  } else if (howManySibs > 4) {
    console.log('Too high. Guess again.');
    alert('Too high. Guess again.');
  }
  alert('Whoops! ' + userName + ', you have no more guesses. The answer is 4 siblings. 3 sisters and a brother.');



//      ==============Question=====================================//
//What are some Washington mountains that Colleen has climbed?
//repeat this question

//for each guess evaluate howManyMountains and give alert.
//Repeat 7 times

var howManyMountains = prompt('What are some Washington mountains that Colleen has climbed?').toLowerCase;
var mountains = ['Mt Baker', 'Glacier Peak', 'Fortress Mountain', 'Mt Shuksan'];
var score = 0;
var correctAns = false;

for (var i = 0; i < 7; i++); {
  if(howManyMountains === mountains[0] || howManyMountains === mountains [1]|| howManyMountains === [2] || mountains === [3])
    console.log('yes');
  } else {
    console.log('nope');
  }

alert('You guessed' + score + ' out of 4!');       
alert('Goodbye, ' + userName + '. Thanks for getting to know me!');