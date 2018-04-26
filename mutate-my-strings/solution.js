function mutateMyStrings(stringOne, stringTwo) {
  let newArr = [];
  newArr.push(stringOne + '\n');
  stringOne = stringOne.split('');
  stringTwo = stringTwo.split('');
  for (let i in stringTwo) {
    if (stringOne[i] !== stringTwo[i]) {
      stringOne[i] = stringTwo[i];
      newArr.push(stringOne.join('') + '\n');
    }
  }
  console.log(newArr.join(''));
  return newArr.join('');
}
mutateMyStrings('bubble gum', 'turtle ham');