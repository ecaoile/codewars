function validatePIN(pin) {
  //return true or false
  console.log(typeof pin);
  if (((pin.includes(/[0-9]/gi) === 'number') && pin.length === 4) || ((pin.includes(/[0-9]/gi) === 'number') && pin.length === 6)) {
    console.log('true');
    return true;
  }
  else {
    console.log(parseInt(pin));
    console.log('false');
    return false;
  }


}
validatePIN('1234');
validatePIN('1234abc');