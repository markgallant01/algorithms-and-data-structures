

function selectionSort(arr) {

  // Copy the original array
  let unsorted = arr.slice();

  // Create an array to store the sorted values
  let sorted = [];

  // While the array is not empty...
  while (unsorted.length > 0) {
    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIndex = 0;
    for (let i = 0; i < unsorted.length; i++) {
      if (unsorted[i] < unsorted[minIndex]) {
        minIndex = i;
      }
    }

    // Save and remove the value at the min index
    let temp = unsorted[minIndex];
    unsorted.splice(minIndex, 1);

    // Add the min value to the end of the sorted array
    sorted.push(temp);
  }

  return sorted;
}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divide = 0;

  // Repeat while the unsorted half is not empty:
  while (divide < arr.length) {

    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIndex = divide;
    for (let i = divide; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }

    // Save the min value
    let minVal = arr[minIndex];

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let i = minIndex - 1; i >= divide; i--) {
      arr[i+1] = arr[i];
    }

    // Put the min value at the divider
    arr[divide] = minVal;

    // Increment the divider and repeat
    divide++;
  }

}


module.exports = [selectionSort, selectionSortInPlace];
