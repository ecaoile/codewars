// function cubeOdd(arr) {
//   console.log(arr);
//   if (!arr) { return undefined; }
//   let filtered = arr.filter(x => typeof x === 'number');
//   console.log(filtered);
//   if (filtered.length < arr.length) {
//     return undefined;
//   }
//   let cubedArr = arr.map(x => Math.pow(x, 3));
//   let oddNums = cubedArr.filter(num => num % 2 !== 0);
//   return oddNums.reduce((a, c) => a + c);
// }

/* refactored solution */
function cubeOdd(arr) {
  if (!arr || arr.some(x => typeof x !== 'number') === true) {
    return undefined;
  }
  let cubedArr = arr.map(x => Math.pow(x, 3));
  let oddNums = cubedArr.filter(num => num % 2 !== 0);
  return oddNums.reduce((a, c) => a + c);
}

cubeOdd([1, 2, 3, 4]);
cubeOdd(['test', 2, 3, 4]);
cubeOdd([1, 2, 3, 'test']);