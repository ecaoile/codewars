function openOrSenior(data) {
  // ... data is a list of lists
  // each element contains 2 elements (age and handicap)
  /* using if else */

  var dataArray = [];
  for (var i in data) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      dataArray.push('Senior');
    }
    else {
      dataArray.push('Open');
    }
  }
  return dataArray;

  /* using switch case */
  /*
  var dataArray = [];
  for (var i in data) {
    switch (data[i][0] >= 55 && data[i][1] > 7) {
      case true:
        dataArray.push('Senior');
        break;
      default:
        dataArray.push('Open');
    }
  }
  return dataArray;
  */
}
openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]);