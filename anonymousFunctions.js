//IIFEs 
(function () {
  console.log("Anonymous Funtion");
})();
//callback
setTimeout(function () {
  console.log("Hello world!");
}, 1000);
// Arguments to functional programming constructs or Lodash (similar to callbacks).
const arr = [1, 2, 3];
const double = arr.map(function(el) {
  return el * 2;
});
console.log(double); // [2, 4, 6]