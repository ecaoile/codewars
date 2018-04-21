function double(array) {
  return array.map(x => 2 * x);
}
var someNumbers = [1, 2, 10, 57];
console.log(double(someNumbers)); // should return [2,4,20,114]