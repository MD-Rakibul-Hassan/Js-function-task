/*
Task-1
Take four parameters. Multiply the four numbers and then return the result
*/
function multiply (num1,num2,num3,num4) {
      return num1 * num2 * num3 * num4;
};
const multiplyResult = multiply(2,3,4,5);
console.log(multiplyResult);
/*
Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
*/

function isOddOrEven (number) {
      if (number % 2 !== 0) {
            return number * 2 ;
      } else {
            return number / 2 ;
      }
}
let oddEvenResult = isOddOrEven(8);
console.log(oddEvenResult)
/*
Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/
const numbers = [10,20,30,40,50,];
function make_avg (array) {
      const length = array.length;
      let sum = 0;
      for (value of array) {
            sum += value;
      }
      return sum / length;
}
const averageOfNumber = make_avg(numbers);
console.log(averageOfNumber);
/*
Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/
function count_zero (binaryString,findingElement) {
      let countZero = 0;
      for (let i = 0; i < binaryString.length; i++) {
            if (binaryString[i] === findingElement) {
                  countZero++;
            }
      }
      return countZero
}
let count_zeros = count_zero("010101100111000","0");
console.log(count_zeros);

/*
Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
*/
function odd_even(integer) {
      return integer % 2 === 0 ? "Even" : "Odd";
}
let odd_even_result = odd_even(13);
console.log(odd_even_result)