'use strict'
const smalestNum = 20;
const biggestNum = 30;
const step = 0.5;
let numbers = '';
for (let i = smalestNum; i <= biggestNum; i = i + step) {
   numbers += i + ' ';
}
console.log(numbers);
