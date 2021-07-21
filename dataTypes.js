/* // --Primitives Data types --//
let x = 10;
let y = x;
// console.log(x,y);
// --2
let num = 10;
function number(num) {
    return num++;
}
const result = number(num);
console.log(result); //--result will be 10 // */

// --Non-Primitives Data types --//
let z = { value: 10 };
let p = z;
// console.log(z,p);

// --2.
let num = { value: 10 };
function number(num) {
  num.value++;
}
number(num);
console.log(num); //--num will be 11 ..bcz object is non-primitive and its not store his value.just store his reference --//
