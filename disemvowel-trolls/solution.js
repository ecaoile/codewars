function disemvowel(str) {
  /* My crappy code */
  /*
  str = str.split('');
  for (var i in str) {
    if (str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e' ||
      str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u') {
      str[i] = '';
    }
  }
  str = str.join('');
  return str;
  */

  /* The optimal solution */
  console.log(str.replace(/[aeiou]/gi, ''));
  return str.replace(/[aeiou]/gi, '');
}

disemvowel('This website is for losers LOL!');
disemvowel('');