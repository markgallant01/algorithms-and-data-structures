function ageSort(users) {
  users.sort((a, b) => {
    if (a.age < b.age) { return -1; }
    if (a.age > b.age) { return 1; }
    else { return 0 }
  });

  return users;
}

function oddEvenSort(arr) {
  arr.sort((a, b) => {
    if (a % 2 === 0 && b % 2 === 1) { return 1; }
    if (a % 2 === 1 && b % 2 === 0) { return -1; }
    return a - b;
  });

  return arr;
}

function validAnagrams(s, t) {
  s = s.split('');
  t = t.split('');

  s.sort();
  t.sort();

  s = s.join('');
  t = t.join('');

  if (s === t) {
    return true;
  }
  else {
    return false;
  }
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
