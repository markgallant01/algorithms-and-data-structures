// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
  if (arr.length === 1 || arr.length === 0) {
    // If so, it's already sorted: return
    return arr;
  }

  // Divide the array in half
  let half = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, half);
  let secondHalf = arr.slice(half);

  // Recursively sort the left half
  firstHalf = mergeSort(firstHalf);

  // Recursively sort the right half
  secondHalf = mergeSort(secondHalf);

  // Merge the halves together and return
  return merge(firstHalf, secondHalf);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let sorted = [];

  // Point to the first value of each array
  let a = 0;
  let b = 0;

  // while values reamain in either array
  while (arrA[a] || arrB[b]) {

    if ((arrA[a] < arrB[b]) || (arrB[b] === undefined)) {
      sorted.push(arrA[a]);
      a++;
    }
    else {
      sorted.push(arrB[b]);
      b++;
    }
  }

  // Return the return array
  return sorted;
}

module.exports = [merge, mergeSort];

