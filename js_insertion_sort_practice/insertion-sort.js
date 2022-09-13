// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  let unsorted = arr.slice();
  let sorted = [];
  while (unsorted.length > 0) {
    console.log(sorted.join(','));

    let x = unsorted.pop(); 
    if (sorted.length === 0) {
      sorted[0] = x;
    }
    else {

      for (let i = sorted.length - 1; i >= -1; i--) {
        if (i === -1) {
          sorted[0] = x;
        }
        else {
          if (sorted[i] < x) {
            sorted[i+1] = x;
            break;
          }
          else {
            sorted[i+1] = sorted[i];
          }
        }
      }

    }
  }

  return sorted;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  let divide = 1;
  while (divide < arr.length) {
    console.log(arr.join(','));

    let currentVal = arr[divide];

    for (let i = divide - 1; i >= 0; i--) {
      if (arr[i] < currentVal) {
        arr[i+1] = currentVal;
        divide++;
        break;
      }
      else {
        if (i === 0) {
          arr[i+1] = arr[i];
          arr[0] = currentVal;
          divide++;
          break;
        }
        else {
          arr[i+1] = arr[i];
        }
      }
    }
  }

  return arr;
}

module.exports = [insertionSort, insertionSortInPlace];
