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
  let formattedList = words.join(', ');
  if (words.length === 2) {
    formattedList = formattedList.replace(',', ' and');
  }
  else {
    formattedList = formattedList.replace(/,([^,]*)$/, ' and$1');
  }
  console.log(formattedList);
  return formattedList;
}
formatWords(['a']);
formatWords(['a', 'b']);
formatWords(['a', 'b', 'c', 'd']);
formatWords(['one', '', 'three']);
formatWords(['']);