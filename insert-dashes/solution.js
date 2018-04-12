function insertDash(num) {
  let numStringArray = num.toString().split('');
  let newNumString = '';
  let WLNO;
  for (var i in numStringArray) {
    if ((parseInt(numStringArray[i]) % 2 !== 0) && WLNO === true) {

      newNumString += '-';

    }
    if (parseInt(numStringArray[i]) % 2 !== 0) {
      WLNO = true;
    }
    else {
      WLNO = false;
    }
    newNumString += numStringArray[i];
  }
  console.log(newNumString);
  return newNumString;
}

insertDash(454793);//'4547-9-3'
insertDash(123456); //'123456
insertDash(1003567); //'1003-567'