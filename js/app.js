'use strict';

//console.log('hello world!');
function name (){
  
alert('Hello World- Wait a minute, i dont even know your name!');

let name = prompt('What is your name Friend?');

alert('Well good to meet you ' + name + '!');
}

function livesInTacoma (){

}
let livesInTacoma = prompt('Do i live in Tacoma?').toLowerCase();

// eslint-disable-next-line no-unused-vars
let lowercaseLivesInTacoma = livesInTacoma.toLowerCase();

//console.log(lowercaseLivesInTacoma);


if (livesInTacoma === 'yes' || livesInTacoma === 'y') {
  // console.log('Yes! I do live in Tacoma');
  alert('Yes! I do live in Tacoma');
} else if (livesInTacoma === 'no' || livesInTacoma ==='n') {
  // console.log('Sorry, but you are wrong. I do live in Tacoma.');
  alert('Sorry, but you are wrong. I do live in Tacoma.');
} else {
  // console.log('You need to answer with a yes or a no');
  alert('You need to answer with a yes or a no');
}

function drivesACar (){

}
let drivesACar = prompt('Do i drive to Seattle for Class?').toLowerCase();
// eslint-disable-next-line no-unused-vars
let lowercasedrivesACar = drivesACar.toLowerCase();
//console.log(lowercasedrivesACar);
if (drivesACar === 'yes' || drivesACar === 'y') {
//console.log('Yes! I do drive to Class! Who likes traffic?');
  alert('Yes! I do drive to Class! Who likes traffic?');
} else if (drivesACar === 'no' || drivesACar === 'n') {
  //console.log('Sorry, but you are wrong. I do drive to Class.');
  alert('Sorry, but you are wrong. I do drive to Class.');
} else {
  //console.log('You need to answer with a yes or a no');
  alert('You need to answer with a yes or a no');
}

function chef (){

}
let chef = prompt('Do i prefer Packing a meal as opposed to Eating out?');
// eslint-disable-next-line no-unused-vars
let lowercasedchef = chef.toLowerCase();

if (chef === 'no' || chef === 'n') {
  alert('Oh man! Close, but no Cigar! I prefer Packing a meal.');
} else if (chef === 'yes' || chef === 'y') {
  alert('Thats right! The best meals are the ones you make! (Sometimes at least!)');
} else {
  alert('Please anwser with a yes or a no.');
}

function web (){

}
let web = prompt('Is this my first coding Program?');
// eslint-disable-next-line no-unused-vars
let lowercasedweb = web.toLowerCase();

if (web === 'yes' || web === 'y') {
  alert('Believe it or not, you are wrong! This is my second course ever, so not far off!');
} else if (web === 'no' || web === 'n') {
  alert('Thats right! This is my second course ever!');
} else {
  alert('Please answer with a yes or a no.');
}
function dream (){

}
let dream = prompt('Was becoming a Software Dev a dream of mine?');
// eslint-disable-next-line no-unused-vars
let lowercasedream = dream.toLowerCase();

if (dream === 'yes' || dream === 'y') {
  alert('You got it! It always has been, but until now i was too nervous to take that first step. No time like the present!');
} else if (dream === 'no' || dream === 'n') {
  alert('While i may not have expressed it often, you are wrong! It has been a dream of mine.');
} else {
  alert('Please answer with a yes or a no.');
}

alert('Well, thank you for taking time to visit this ' + name + '! I hope to interact again soon!');