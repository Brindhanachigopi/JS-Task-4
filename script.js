// 1.a. Print odd numbers in an array

// Anonymous Function

let array = function (value) {
  for (let i = 0; i < value.length; i++) {
    if (value[i] % 2 != 0) {
      console.log(value[i]);
    }
  }
};
let odd = array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// IIFE Functions

let odd = (function array(value) {
  for (let i = 0; i < value.length; i++) {
    if (value[i] % 2 != 0) {
      console.log(value[i]);
    }
  }
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(odd);

// 2.a. Print odd numbers in an array

// Arrow Functions

let array = (value) => {
  for (let i = 0; i < value.length; i++) {
    if (value[i] % 2 != 0) {
      console.log(value[i]);
    }
  }
};
array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//1.b. Convert all the strings to title caps in a string array

// Anonymous Function

let title = function (str) {
  str = str.toLowerCase().split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};

let titleCase = title("hArry poTTer pArt onE");
console.log(titleCase);

// IIFE Functions

let titleCase = (function title(str) {
  str = str.toLowerCase().split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
})("hArry poTTer pArt onE");
console.log(titleCase);

//2.b. Convert all the strings to title caps in a string array

// Arrow Functions

let titleCase = (str) => {
  str = str.toLowerCase().split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  console.log(str.join(" "));
};
titleCase("hArry poTTer pArt onE");

// 1.c. sum of all numbers in an array

// Anonymous Function

let num = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};
let add = num([1, 2, 3, 4, 5]);
console.log(add);

// IIFE Functions

let add = (function num(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
})([1, 2, 3, 4, 5]);
console.log(add);

// 2.c. sum of all numbers in an array

// Arrow Functions

let add = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};
console.log(add([1, 2, 3, 4, 5]));

// 1. d. Return all the prime numbers in an array

// Anonymous Function

const isPrime = function (x) {
  if (x < 1) return false;
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};

const numbers = [10, 2, 3, 4, 5, 47, 42, 49];
const primeNumbers = [];

for (const number of numbers) {
  if (isPrime(number)) {
    primeNumbers.push(number);
  }
}

console.log("Prime numbers in the array:", primeNumbers);

// IIFE Functions

const isPrime = function num(x) {
  if (x < 1) return false;
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};

const numbers = [10, 2, 3, 4, 5, 47, 42, 49];
const primeNumbers = [];

for (const number of numbers) {
  if (isPrime(number)) {
    primeNumbers.push(number);
  }
}

console.log("Prime numbers in the array:", primeNumbers);

// 2. d. Return all the prime numbers in an array

// Arrow Functions

const isPrime = (x) => {
  if (x < 1) return false;
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};

const numbers = [10, 2, 3, 4, 5, 47, 42, 49];
const primeNumbers = [];

for (const number of numbers) {
  if (isPrime(number)) {
    primeNumbers.push(number);
  }
}

console.log("Prime numbers in the array:", primeNumbers);

// 1.e. Return all the palindromes in an array

// Anonymous Function

const isPalindrome = function (str) {
  let isPal = true;
  for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
    if (str[i] !== str[j]) {
      isPal = false;
    }
  }
  return isPal;
};
let str = "madam";
console.log(isPalindrome(str));

// IIFE Functions

const isPalindrome = (function letter(str) {
  let isPal = true;
  for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
    if (str[i] !== str[j]) {
      isPal = false;
    }
  }
  return isPal;
})("madam");
console.log(isPalindrome);

// 2.e. Return all the palindromes in an array

// Arrow Functions

const isPalindrome = (str) => {
  let isPal = true;
  for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
    if (str[i] !== str[j]) {
      isPal = false;
    }
  }
  return isPal;
};
console.log(isPalindrome("madam"));

// 1.f. Return median of two sorted arrays of the same size

// Anonymous Function

const findMedianSortedArrays = function (nums1, nums2) {
  const combinedArray = nums1.concat(nums2);

  combinedArray.sort((a, b) => a - b);

  const middleIndex = Math.floor(combinedArray.length / 2);

  if (combinedArray.length % 2 === 0) {
    return (combinedArray[middleIndex - 1] + combinedArray[middleIndex]) / 2;
  } else {
    return combinedArray[middleIndex];
  }
};

const nums1 = [11, 12, 13, 14, 15];
const nums2 = [16, 17, 18, 19, 20];

const median = findMedianSortedArrays(nums1, nums2);
console.log(median);

// IIFE Functions

let findMedianSortedArrays = function arr(nums1, nums2) {
  const combinedArray = nums1.concat(nums2);
  combinedArray.sort((a, b) => a - b);
  const middleIndex = Math.floor(combinedArray.length / 2);

  if (combinedArray.length % 2 === 0) {
    return (combinedArray[middleIndex - 1] + combinedArray[middleIndex]) / 2;
  } else {
    return combinedArray[middleIndex];
  }
};

const nums1 = [11, 12, 13, 14, 15];
const nums2 = [16, 17, 18, 19, 20];

const median = findMedianSortedArrays(nums1, nums2);
console.log(median);

// 1.g. Remove duplicates from an array

let removeDuplicates = function (originalArray) {
  let uniqueArray = [];

  for (let i = 0; i < originalArray.length; i++) {
    if (uniqueArray.indexOf(originalArray[i]) === -1) {
      uniqueArray.push(originalArray[i]);
    }
  }

  return uniqueArray;
};

let array = removeDuplicates([2, 2, 3, 2, 2, 1]);
console.log(array);

// IIFE Functions

let removeDuplicates = function (originalArray) {
  let uniqueArray = [];

  for (let i = 0; i < originalArray.length; i++) {
    if (uniqueArray.indexOf(originalArray[i]) === -1) {
      uniqueArray.push(originalArray[i]);
    }
  }

  return uniqueArray;
};

console.log(removeDuplicates([2, 2, 3, 2, 2, 1]));

// 1.h. Rotate an array by k times

// Anonymous Function

let rotateArray = function (arr, k) {
  let rotatedArray = [];

  for (let i = k; i < arr.length; i++) {
    rotatedArray.push(arr[i]);
  }

  for (let i = 0; i < k; i++) {
    rotatedArray.push(arr[i]);
  }

  return rotatedArray;
};

let newArray = rotateArray([1, 2, 3, 4, 5], 3);

console.log(newArray);

// IIFE Functions

let rotateArray = function (arr, k) {
  let rotatedArray = [];

  for (let i = k; i < arr.length; i++) {
    rotatedArray.push(arr[i]);
  }

  for (let i = 0; i < k; i++) {
    rotatedArray.push(arr[i]);
  }

  return rotatedArray;
};

console.log(rotateArray([1, 2, 3, 4, 5], 3));
