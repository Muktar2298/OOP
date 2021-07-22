// 1.--this in object methode --//
/* const obj = {
  name: "JavaScript Learner",
  print: function () {
    console.log(this.name);
  },
};
obj.print(); */

/* //2. --this in function --//
function myFunction(){
console.log(this);
}
myFunction(); 

// --In strict mode --//
"use strict";
function myFunction(){
    console.log(this);
}
myFunction(); */

/* // 3. ---this in alone --//
let alone  = this;
console.log(alone); 

"use strict"
let alone = this;
console.log(alone); */

/* // 4. this in event  --//
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  this.style.display = "none";
}); */

/* // --actually for connecting => functionla programming (function)  with => object oriented programming(object) we can use => bind(),call(),apply() --//
// 5.--bind() --//
function myFunction(num) {
  console.log(this);
  return this.value + num;
}
// myFunction(10); //--will be NaN --// Because ..in this function there is no object & this keyword not refers anyone --//
const obj = { value: 10 };
const binded = myFunction.bind(obj);
// console.log(binded);
const result = binded(10);
console.log(result); */

/* // 6..inner and outer function --//
function outer() {
  function inner() {
    console.log(this);
  }
  inner();
}
// outer();  // this keyword  will be a window object //
//--ii.
function outer() {
    function inner() {
      console.log(this);
    }
    new inner();
  }
outer ();  //--this keyword will be a object-- //  */

/* // --7
const person = {
  name: "Nishat Hsan Muktar",
  print: function () {
    console.log("Hello" + " " + this.name);
  },
};
// person.print();
const personInfo = person.print;
// personInfo();  //--this keyword value (this.name) will be undefined ..because personInfo is function (here this is not refers a object) --//

const personData = personInfo.bind(person);
personData(); */

// 8--setTimeout() --//
/* i.
const person = {
  name: "Nishat Hsan Muktar",
  print: function () {
    var name = this.name;
    console.log(name);
  },
};
person.print()
 */

//ii...
const person = {
  name: "Nishat Hsan Muktar",
  print: function () {
    setTimeout(
      function () {
        console.log(this);
        console.log("Hello", this.name);
      }.bind(this)
    );
  },
};
person.print();
