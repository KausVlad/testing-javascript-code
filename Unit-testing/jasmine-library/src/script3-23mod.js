'use strict';

const xArray = ['sh', '62', 'glek', 64, -7, undefined, 4, 'grek', true, 84, 42];
const ss = [1, 2, 4, 1];

function onlyNumberArray(array) {
  const newArray = [];
  for (const iterator of array) {
    if (!isNaN(parseFloat(iterator))) {
      newArray.push(parseFloat(iterator)); // Завдяки тестам знайшов баг. Проблема в тому, що функція parseInt() (яку я раніше використовував) перетворює рядок в ціле число і відкидає будь-які символи, які не можуть бути інтерпретовані як число, такі як крапки в десяткових числах. Щоб зберегти десяткові частини, потрібно використовувати parseFloat() замість parseInt().
    }
  }
  return newArray;
}

console.log(onlyNumberArray(xArray));

function maxArrayNumber(array) {
  if (array.length === 0) {
    return null;
  }
  let max = array[0];
  for (const iterator of array) {
    if (iterator > max) {
      max = iterator;
    }
  }
  return max;
}

function minArrayNumber(array) {
  if (array.length === 0) {
    return null;
  }
  let min = array[0];
  for (const iterator of array) {
    if (iterator < min) {
      min = iterator;
    }
  }
  return min;
}

function sumArray(array) {
  if (array.length === 0) {
    return null;
  }
  let sum = 0;
  for (const iterator of array) {
    sum += iterator;
  }
  return sum;
}

console.log(
  maxArrayNumber(onlyNumberArray(xArray)),
  minArrayNumber(onlyNumberArray(xArray)),
  sumArray(onlyNumberArray(xArray))
);
