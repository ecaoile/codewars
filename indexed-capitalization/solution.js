function capitalize(s, arr) {
  s = s.split('');
  for (let i in arr) {
    if (s[arr[i]]) s[arr[i]] = s[arr[i]].toUpperCase();
  }
  console.log(s.join(''));
  return s.join('');
}
capitalize('abcdef', [1, 2, 5]); //"aBCdeF"
capitalize('abcdef', [1, 2, 5, 100]); // "aBCdeF"