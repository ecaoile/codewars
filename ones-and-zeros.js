const binaryArrayToNumber = arr => {
  // your code
  /*
  var totalInt = 0;
  if (arr[0] === 1) {
    totalInt += 8;
  }

  if (arr[1] === 1) {
    totalInt += 4;
  }

  if (arr[2] === 1) {
    totalInt += 2;
  }

  if (arr[3] === 1) {
    totalInt += 1;
  }
  console.log(totalInt);
  return totalInt;
  */

  /* best practices approach */
  parseInt(arr.join(''), 2);
};

binaryArrayToNumber([1, 0, 1, 0]);