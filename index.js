"use strict"

const data = [8, 9, 10, 11, 12, 13, 14, 100, 45, 60, 30]


const newDataEven = data.filter(num => {
  return (num % 2 === 0)
})

const newDataOdd = data.filter(num => {
  return (num % 2 !== 0)
})

const toBiggerNumber = data.map(num => {
  if (num > 20) {
    return num
  }
}).filter(item => item != undefined)


const toLowerNumber = data.map(num => {
  if (num < 20) {
    return num * 2
  }
}).filter(item => item !== undefined)

console.log(newDataEven);

console.log(newDataOdd);

console.log(toBiggerNumber);

console.log(toLowerNumber);

const originalArray = [1, 2, undefined, 3, 'asdakjlsdjlkasdjasd'];

const newArray = originalArray
  .filter(value => {
    return Number.isInteger(value);
  }).map(value => {
    return value * 2;
  });

console.log(newArray);