function ageSort(users) {
  users.sort((a, b) => {
    if (a.age < b.age) { return -1; }
    if (a.age > b.age) { return 1; }
    else { return 0 }
  });

  return users;
}

function oddEvenSort(arr) {
  // Your code here
}

function validAnagrams(s, t) {
  // Your code here
}

function reverseBaseSort(arr) {
  // Your code here
}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
