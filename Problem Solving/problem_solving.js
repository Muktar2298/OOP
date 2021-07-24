/* --site we solve problem-- 
=> https://www.w3resource.com/javascript-exercises/javascript-object-exercises.php
*/

/* // --problem-1 --//
const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
for (let property in student) {
  console.log(property);
} */

// --problem-2 --//
/* let student = {
  name: "David Rayy",
  sclass: "VI",
rollno: 12,
};
console.log(student);
delete student.rollno;
console.log(student); */

/* // --problem-3 --//
let student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
// console.log(Object.keys(student).length)
for (let property in student) {
  console.log(property.length);
} */

/* // --problem-4 --//
const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

library.forEach((element) => {
  //   console.log(
  //      `Auther Name:${element.author}  Reading Status: ${element.readingStatus} `
  //   );
  console.log(element.readingStatus);
});
 */

/* // --Problem-5 -//
function Cylinder(radius, height) {
  this.radius = radius;
  this.height = height;
}

Cylinder.prototype.cylinder_volum = function () {
  return Math.PI * this.radius * this.radius * this.height;
};

const cylinder1 = new Cylinder(2, 7);
const volum1 = cylinder1.cylinder_volum().toFixed(4);
console.log(`Volum : ${volum1}`);

// --second object --//
const cylinder2 = new Cylinder(4, 7);
const volum2 = cylinder2.cylinder_volum().toFixed(4);
console.log(`V0lum : ${volum2}`); */

/* 
// --Problem-6 --//

/* // --normally numeric array sorting --//
const data = [6, 4, 0, 3, -2, 1];
data.sort(function (a, b) {
  return a - b;
});
console.log(data); */

/* function Sorting(data) {
  this.data = data;
}

const sortingAlgorithm = new Sorting([6, 4, 0, 3, -2, 1]);
const sorting = sortingAlgorithm.data;
console.log("Before Sorting : " + sorting);
sorting.sort(function (a, b) {
  return a - b;
});
console.log("After Sorting : " + sorting);
 */ //*/

/* //  --problem-7 --//
// --way-1--//
function Subset(name) {
  this.name = name;
}

Subset.prototype.subsetString = function () {
    var subset = [];
    for (var m = 0; m < this.length; m++) 
    {
      for (var n = m+1; n<this.length+1; n++) 
      {
        subset.push(this.slice(m,n));
      }
    }
    return subset;
};
const tigerlObject = new Subset("Tiger");
console.log(tigerlObject.subsetString()); */

/* // --way-2 -//
String.prototype.sub_String = function() 
{
  var subset = [];
  for (var m = 0; m < this.length; m++) 
  {
    for (var n = m+1; n<this.length+1; n++) 
    {
      subset.push(this.slice(m,n));
    }
  }
  return subset;
};

console.log("tiger".sub_String()); */

/* // --Problem-9 --//
function Calculate(radius) {
  this.radius = radius;
}

Calculate.prototype = {
  areaCaculation: function () {
    return Math.PI * this.radius * this.radius;
  },
  perimeterCalculation: function () {
    return 2 * Math.PI * this.radius;
  },
};

const circle1 = new Calculate(4);
console.log(`Area is : ${circle1.areaCaculation().toFixed(4)}`); //
console.log(`Perimeter is : ${circle1.perimeterCalculation().toFixed(4)}`); //

const circle2 = new Calculate(10);
console.log(`Area is : ${circle2.areaCaculation().toFixed(2)}`); //
console.log(`Perimeter is : ${circle2.perimeterCalculation().toFixed(2)}`); */ //


/* 
// --Pboblem -11 --//

const obj = {
  name: "nishat",
  age: 21,
  methode1: function () {
    console.log("Methode 1");
  },
  methode2: function () {
    console.log("Methode 1");
  },
  methode3: function () {
    console.log("Methode 1");
  },
};
const objArray = Object.keys(obj);
console.log(objArray);
objArray.filter((element) => {
  if (typeof obj[element] === "function") {
    console.log(element);
  }
}); 
 */

