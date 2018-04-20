function solution(str) {
  /* my solution */
  // let reverseStr = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   reverseStr += str[i];
  // }
  // return reverseStr;

  /* optimal solution */
  console.log(str.split('').reverse().join(''));
  return str.split('').reverse().join('');
}

solution('world');