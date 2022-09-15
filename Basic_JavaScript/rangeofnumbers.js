/*
A function named rangeOfNumbers with two parameters is defined. 
The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. 
The starting number will always be less than or equal to the ending number. 
The function must use recursion by calling itself and not use loops of any kind. 
It should also work for cases where both startNum and endNum are the same.
*/

function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
       return [];
     } else {
       const array = rangeOfNumbers(startNum, endNum - 1);
       array.push(endNum);
       return array;
     }
   }