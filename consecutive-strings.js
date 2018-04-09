
function longestConsec(strarr, k) {
  /* shorter solution */
  var longestStr = '';
  var n = strarr.length;
  if (n === 0 || k > n || k <= 0) {
    console.log('invalid input');
    return '';
  }
  for (var i = 0; k > 0 && i <= n - k; i++) {
    var tempArray = strarr.slice(i, i + k);
    console.log(tempArray);
    var tempStr = tempArray.join('');
    if (tempStr.length > longestStr.length) {
      longestStr = tempStr;
    }
  }
  console.log(longestStr);
  return longestStr;
}
/* my ghetto solution */
/*
var n = strarr.length;
if (n === 0 || k > n || k <= 0) {
  console.log('invalid input');
  return '';
}
var consecStrings = getAllConsecString(strarr, k, n);
return getLongestString(consecStrings);
}
function getAllConsecString(strarr, k, n) {

  var bigStrArray = [];
  for (var i = 0; i < n; i++) {
    var concatStr = '';
    for (var j = i; j < i + k; j++) {
      if (strarr[j]) {
        concatStr += strarr[j];
      }
    }
    bigStrArray.push(concatStr);
  }
  console.log(bigStrArray);
  return bigStrArray;
}

function getLongestString(strarr) {
  var longestString = '';
  var longestLength = 0;
  for (let str of strarr) {
    var strLen = str.length;
    if (strLen > longestLength) {
      longestString = str;
      longestLength = strLen;
    }
  }
  console.log(longestString);
  return longestString;
}

/*
const longestConsec = (strarr, k) => {
  let n = strarr.length;
  if (!n || k <= 0 || k > strarr.length)
    return '';

  let lengths = Array(n);

  // fill the running window
  let windowLen = 0;
  for (let i = 0; i < k - 1; i++) {
    let stringLen = strarr[i].length;
    windowLen += stringLen;
    // fill the cache with items 0..k-1, the rest will be filled in the main loop
    lengths[i] = stringLen;
  }

  let maxLen = 0;
  let maxLenAt = 0;
  for (let i = k - 1, windowStart = 0; i < n; i++ , windowStart++) {
    let stringLen = strarr[i].length;
    lengths[i] = stringLen;

    let thisLen = windowLen + stringLen;
    if (thisLen > maxLen) {
      maxLen = thisLen;
      maxLenAt = windowStart;
    }
    windowLen += stringLen - lengths[windowStart];
  }

  console.log(strarr.slice(maxLenAt, maxLenAt + k).join(''));
  return strarr.slice(maxLenAt, maxLenAt + k).join('');

};
*/
longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas', 'theta', 'abigail'], 2);
longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2);
//'wlwsasphmxxowiaxujylentrklctozmymu'
longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15);
longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3);