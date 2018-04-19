function formatWords(words) {
  if (!words) {
    return '';
  }
  for (var i = 0; i < words.length; i++) {
    if (words[i] === '') {
      words.splice(i, 1);
      i--;
    }
  }

  console.log(words);
  let formattedList = words.join(', ');
  console.log(formattedList);
  if (words.length === 2) {
    formattedList = formattedList.replace(',', ' and');
  }
  else {
    formattedList = formattedList.replace(/,([^,]*)$/, ' and$1');
  }
  // for (let i = 0; i < words.length; i++) {
  //   console.log(words[i]);
  //   if (i === words.length - 1 && words[i] !== '') {
  //     console.log('alpha');
  //     formattedList += words[i];
  //   }
  //   if (i === words.length - 2 && words[i] !== '') {
  //     console.log('bravo');
  //     formattedList += words[i] + ' and ';
  //   }
  //   if (i < words.length - 2 && words[i] !== '') {
  //     formattedList += words[i] + ', ';
  //     console.log('crap');
  //   }
  // }
  console.log(formattedList);
  return formattedList;
}
formatWords(['a']);
formatWords(['a', 'b', 'c', 'd']);
formatWords(['one', '', 'three']);