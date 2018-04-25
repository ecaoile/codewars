function high(x) {
  const abcStr = 'abcdefghijklmnopqrstuvwxyz';
  const xArray = x.split(' ');
  let xArrayPts = [];
  for (let j in xArray) {
    let totalWordPts = 0;
    for (let i in abcStr) {
      let regexLetter = new RegExp(abcStr[i], 'g');
      if (xArray[j].match(regexLetter)) {
        totalWordPts += (parseInt(i) + 1) * xArray[j].match(regexLetter).length;
      }
    }
    xArrayPts.push(totalWordPts);
  }
  const highestScoreWord = xArray[xArrayPts.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0)];
  console.log(highestScoreWord);
  return highestScoreWord;
}

high('man i need a taxi up to ubud'); //'taxi'
high('what time are we climbing up the volcano'); //'volcano'
high('take me to semynak');// 'semynak'