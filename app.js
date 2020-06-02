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
var userName = prompt('What is your name?');
alert("Hello, " + userName + "!")


var wasabiQuestion = prompt('Does Colleen like wasabi?').toLowerCase();


if (wasabiQuestion === 'yes' || wasabiQuestion === 'y') {
  // console.log('You are wrong!')
  alert('You are wrong!')
} else if (wasabiQuestion === 'no' || wasabiQuestion === 'n') {
  // console.log('You are correct!') 
  alert('You are correct!')
} else {
  alert('Choose yes or no')

}
var irishQuestion = prompt('Is Colleen Irish?').toLowerCase();

if (irishQuestion === 'yes' || irishQuestion === 'y') {
  // console.log('Sure and Begorrah!')
  alert('Sure and Begorrah!')
} else if (irishQuestion === 'no' || irishQuestion === 'n') {
  // console.log('O\'wrong!') 
  alert('O\'wrong!')
} else {
  alert('Choose yes or no')
}

var singQuestion = prompt('Can Colleen sing?').toLowerCase();
if (singQuestion === 'yes' || singQuestion === 'y') {
  // console.log('You are off-tune')
  alert('You are off-tune!')
} else if (singQuestion === 'no' || singQuestion === 'n') {
  // console.log('You on-key!') 
  alert('You are on-key!')
} else {
  alert('Choose yes or no')
}
var climbQuestion = prompt('Does Colleen like to climb mountain?').toLowerCase();
if (climbQuestion === 'yes' || climbQuestion === 'y') {
  // console.log('You are on the right trail!')
  prompt('You are on the right trail!')
} else if (climbQuestion === 'no' || climbQuestion === 'n') {
  // console.log('Wrong way') 
  alert('Wrong way')
} else {
  alert('Choose yes or no')
}
var codeQuestion = prompt('Does Colleen like to code?').toLowerCase();
if (codeQuestion === 'yes' || codeQuestion === 'y') {
  //console.log('TRUE')
  prompt('TRUE')
} else if (codeQuestion === 'no' || codeQuestion === 'n') {
  // console.log('FALSE!') 
  alert('FALSE!')
} else {
  alert('Choose yes or no')
}

alert("Goodbye, " + userName + "!")