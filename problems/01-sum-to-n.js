/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/

// your code here
const sumToN = num => {
  // base cases
  if (num < 0) {
    return null;
  }
  else if (num === 1) {
    return 1;
  }
  else {
    // resursive case
    return num + sumToN(num - 1);
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
