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

var wasabiQuestion = prompt('Does Colleen like wasabi?');
var irishQuestion = prompt('Is Colleen Irish?')
var singQuestion = prompt('Can Colleen sing?')
var climbQuestion = prompt('Does Colleen like to climb mountains?')
var codeQuestion = prompt('Does Colleen like to code?')


if (wasabiQuestion) {
  // console.log('You are wrong!')
  alert('You are wrong!')
} else {
  // console.log('You are correct!') 
  alert('You are correct!')
}

if (irishQuestion) {
  // console.log('Sure and Begorrah!')
  alert('Sure and Begorrah!')
} else {
  // console.log('O\'wrong')
  alert('O\'wrong')
}

if (singQuestion) {
  // console.log('You are off-tune')
  alert('You are off-tune')
} else {
  // console.log('You are on-key!')
  alert('You are on-key!')
}

if (climbQuestion) {
  // console.log('You are on the right trail!')
  prompt('You are on the right trail!')
} else {
 //  console.log('Wrong way!')
 prompt('Wrong way!')
}

if (codeQuestion) {
  //console.log('TRUE')
  prompt('TRUE')
} else {
  //console.log('FALSE!')
  prompt('FALSE!')
}