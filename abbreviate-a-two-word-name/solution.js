function abbrevName(name) {
  let nameArray = name.split(' ');
  for (let i in nameArray) {
    nameArray[i] = nameArray[i][0];
  }
  console.log(nameArray.join('.').toUpperCase());
  return nameArray.join('.').toUpperCase();
}
abbrevName('sam harris');