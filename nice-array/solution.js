function isNice(arr) {
  let isNice = false;
  if (!arr) {
    return isNice;
  }

  for (let i in arr) {
    if (arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1)) {
      isNice = true;
    }
    else {
      isNice = false;
      break;
    }
  }
  console.log(isNice);
  return isNice;
}

isNice([2, 10, 9, 3]);
isNice([]);