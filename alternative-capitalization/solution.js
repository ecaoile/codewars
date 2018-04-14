/* arrow form solution */
const capitalize = s => {
  let oddCaps = '', evenCaps = '';
  for (let i in s) {
    if (i % 2 === 0) {
      oddCaps += s[i];
      evenCaps += s[i].toUpperCase();
    }
    else {
      oddCaps += s[i].toUpperCase();
      evenCaps += s[i];
    }
  }
  console.log([evenCaps, oddCaps]);
  return [evenCaps, oddCaps];
};
capitalize('abcdef');

/* hacky solution */
/*
function capitalize(s){
  return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
};
*/

/* original solution */
/*
function capitalize(s) {
  let oddCaps = '', evenCaps = '';
  for (let i in s) {
    if (i % 2 === 0) {
      oddCaps += s[i];
      evenCaps += s[i].toUpperCase();
    }
    else {
      oddCaps += s[i].toUpperCase();
      evenCaps += s[i];
    }
  }
  console.log([evenCaps, oddCaps]);
  return [evenCaps, oddCaps];
}
*/
