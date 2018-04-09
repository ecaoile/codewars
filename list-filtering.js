function filter_list(l) {
  // Return a new array with the strings filtered out
  /* MY SOLUTION! YEAH! */
  return l.filter(newList => typeof newList === 'number');

  /* another solution that's long and drawn out */
  /*
  var newArray = [];
  for (var i in l) {
    if (typeof l[i] === 'number') {
      newArray.push(l[i]);
    }
  }
  console.log(newArray);
  return newArray;
  */
}

filter_list([1, 2, 'a', 'b']); /* [1, 2];*/