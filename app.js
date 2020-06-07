'use strict';
var userName = '';
var score = 0;

function greeting(){
  userName = prompt('What is your name?');
  alert('Hello, ' + userName + '. Welcome!');
}
greeting();

function fiveQuestions(){

  var wasabiQuestion = prompt('Does Colleen like wasabi?').toLowerCase();
  if (wasabiQuestion === 'yes' || wasabiQuestion === 'y') {
    alert('You are wrong!');
  } else if (wasabiQuestion === 'no' || wasabiQuestion === 'n') {
    alert('You are correct!');
  } else {
    alert('Choose yes or no');
  }

  var irishQuestion = prompt('Is Colleen Irish?').toLowerCase();
  if (irishQuestion === 'yes' || irishQuestion === 'y') {
    alert('Sure and Begorrah!');
  } else if (irishQuestion === 'no' || irishQuestion === 'n') {
    alert('O\'wrong!');
  } else {
    alert('Choose yes or no');
  }

  var singQuestion = prompt('Can Colleen sing?').toLowerCase();
  if (singQuestion === 'yes' || singQuestion === 'y') {
    alert('You are off-tune!');
  } else if (singQuestion === 'no' || singQuestion === 'n') {
    alert('You are on-key!');
  } else {
    alert('Choose yes or no');
  }
  var climbQuestion = prompt('Does Colleen like to climb mountain?').toLowerCase();
  if (climbQuestion === 'yes' || climbQuestion === 'y') {
    alert('You are on the right trail!');
  } else if (climbQuestion === 'no' || climbQuestion === 'n') {
    alert('Wrong way');
  } else {
    alert('Choose yes or no');
  }
  var codeQuestion = prompt('Does Colleen like to code?').toLowerCase();
  if (codeQuestion === 'yes' || codeQuestion === 'y') {
    alert('TRUE');
  } else if (codeQuestion === 'no' || codeQuestion === 'n') {
    alert('FALSE!');
  } else {
    alert('Choose yes or no');
  }
}
fiveQuestions();


function siblings(){
  for (var i = 0; i < 4; i++) {
    var howManySibs = prompt('How many siblings does Colleen have?');
    howManySibs = parseInt(howManySibs);
    if (howManySibs === 4){
      console.log('Ding, Ding, Ding - Correct!');
      alert('Ding, Ding, Ding - Correct!');
      break;
    } else if (howManySibs <= 3) {
      console.log('Too low. Give it another shot.');
      alert('Too low. Give it another shot.');
    } else if (howManySibs > 4) {
      console.log('Too high. Guess again.');
      alert('Too high. Guess again.');
    }
  }
  if(i === 4){
    alert('Whoops! ' + userName + ', you have no more guesses. The answer is 4 siblings. 3 sisters and a brother.');
  }
}
siblings();


function bigHills(){
  var mountainArray = ['mt baker', 'glacier peak', 'fortress mountain', 'mt shuksan'];

  for (var i = 0; i < 7; i++){
    var mountains = prompt('What are some of the mountains that Colleen has climbed?').toLowerCase();
    if(mountains === mountainArray[0] || mountains === mountainArray[1] || mountains === mountainArray[2] || mountains === mountainArray[3]){
      console.log('yes');
      score++;
      alert('Correct!');
    } else{
      console.log('nope');
      alert('Wrong!');
    }
  }
}
bigHills();
alert('You answered ' + score + ' correctly! In case you are wondering, some of the mountains are Mt Baker, Glacier Peak, Fortress Mountain, and Mt Shuksan.');
alert('Goodbye, ' + userName + '. Thanks for getting to know me!');
