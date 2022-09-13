function anagrams(str1, str2) {
  // create key-value list for each letter in both strings
  let s1List = {};
  let s2List = {};
  
  str1 = str1.split('');
  str2 = str2.split('');

  str1.forEach((letter) => {
    if (s1List[letter]) {
      s1List[letter]++;
    }
    else {
      s1List[letter] = 1;
    }
  });

  str2.forEach((letter) => {
    if (s2List[letter]) {
      s2List[letter]++;
    }
    else {
      s2List[letter] = 1;
    }
  });

  // compare the lists both ways
  for (const key in s1List) {
    if (s1List[key] !== s2List[key]) {
      return false;
    }
  }

  for (const key in s2List) {
    if (s2List[key] !== s1List[key]) {
      return false;
    }
  }

  return true;
}


function commonElements(arr1, arr2) {
  let commonNums = {};

  arr1.forEach((num) => {
    if (commonNums[num]) {
      commonNums[num]++;
    }
    else {
      commonNums[num] = 1; 
    }
  });

  arr2.forEach((num) => {
    if (commonNums[num]) {
      commonNums[num]++;
    }
    else {
      commonNums[num] = 1;
    }
  });

  let result = [];
  for (const num in commonNums) {
    if (commonNums[num] > 1) {
      result.push(parseInt(num));
    }
  }

  return result;
}


function duplicate(arr) {
  // create object storing the count of each num
  let count = {};
  arr.forEach((num) => {
    if (count[num]) {
      count[num]++;
    }
    else {
      count[num] = 1;
    }
  });

  // return whatever count is > 1
  for (const num in count) {
    if (count[num] > 1) {
      return parseInt(num);
    }
  }
}


function twoSum(nums, target) {
  // check each value with all the values after it
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return true;
      }
    }
  }

  return false;
}


function wordPattern(pattern, strings) {
  // Your code here
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
