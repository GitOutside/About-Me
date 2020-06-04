'use strict';
console.log ('I\'m alive');
var userName = "";
/*
About Colleen

Does Colleen like wasabi? no
Is Colleen Irish? yes
Can Colleen sing? no
Does Colleen like to climb mountains? yes
Does Colleen like to code? yes
*/

function Greeting(){
userName = prompt('What is your name?');
alert('Hello, ' + userName + '. Welcome!');
}
Greeting();

function FiveQuestions(){
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
  alert('You are on the right trail!');
} else if (climbQuestion === 'no' || climbQuestion === 'n') {
  // console.log('Wrong way')//
  alert('Wrong way');
} else {
  alert('Choose yes or no');
}
var codeQuestion = prompt('Does Colleen like to code?').toLowerCase();
if (codeQuestion === 'yes' || codeQuestion === 'y') {
  //console.log('TRUE')
  alert('TRUE');
} else if (codeQuestion === 'no' || codeQuestion === 'n') {
  // console.log('FALSE!')//
  alert('FALSE!');
} else {
  alert('Choose yes or no');
}
}
FiveQuestions();

//==========Question 6==========//
/*
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



///seventh question with array. multiple choice
//What are some Washington mountains that Colleen has climbed?

  var mountainArray = ['Mt Baker', 'Glacier Peak', 'Fortress Mountain', 'Mt Shuksan'];
  for (i = 0; i < 7; i++); {
    if(mountainArray === 'Mt Baker' || mountainArray === 'Glacier Peak' || mountainArray === 'Fortress Mountain' || mountainArray === 'Mt Shuksan'){
      console.log('yes');
    } else
      console.log('nope');
  }

  if(mountainArray === 'Mt Baker' || mountainArray === 'Glacier Peak' || mountainArray === 'Fortress Mountain' || mountainArray === 'Mt Shuksan'){
    console.log('yes');
  } else
    console.log('nope');
}
alert('Goodbye, ' + userName + '. Thanks for getting to know me!')
*/