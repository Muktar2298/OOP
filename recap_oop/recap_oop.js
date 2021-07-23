/*//1. --abstraction --//
const obj = {
  name: "nishat hasan",
  age: 21,
};

console.log(obj.name);

//2. --Encapsulation --//
const obj2 = {
  name: "nishat hasan",
  age: 21,
  //   print :function(){
  //   console.log(`hello! ${obj.name}`);
  //   },
  print() {
    console.log(`hello! ${obj.name}`); //--same as above object methode --//
  },
};
obj2.print(); */
/* 


//3. --Inheritance --//
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.print = function () {
      console.log(`Hello! ${this.name}`);
    };
  }
}

// --Inherit Person call in Student class --//
class Student extends Person {
  constructor(id, email, name, age) {
    super(name, age);
    this.id = id;
    this.email = email;
  }
}

const obj1 = new Student(
  2298,
  "muktar15-2298@diu.edu.bd",
  "Nishat Hasan Muktar",
  21
);
console.log(obj1); */
/* 


// 4.--polymorphism --//

// --Using factory function --//
function factoryFunction(name, id, email) {
  return {
    name: name,
    id: id,
    email: email,
    print() {
      return `StudentName: ${this.name}  StudentId: ${this.id} \n StudentEmail: ${this.email}`;
    },
  };
}
const obj1 = factoryFunction("Nishat Hasan Muktar", 2298, "muktar15-2298");
const obj2 = factoryFunction("Mahfuz Sarkar", 2285, "mahfuz15-2285@diu.edu.bd");
const obj3 = factoryFunction("Zahid Hasan", 2286, "zahid15-2286@diu.edu.bd");
console.log(obj1, obj2, obj3); 


 // -- using constructor function --//
function Student(name, id, email) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.print = function () {
    return `StudentName: ${this.name}  StudentId: ${this.id} \n StudentEmail: ${this.email}`;
  };
}

const obj1 = new Student("Nishat Hasan Muktar", 2298, "muktar15-2298");
const obj2 = new Student("Mahfuz Sarkar", 2285, "mahfuz15-2285@diu.edu.bd");
const obj3 = new Student("Zahid Hasan", 2286, "zahid15-2286@diu.edu.bd");

console.log(obj1, obj2, obj3); */

/* 
/* --5. find the all properties of an Object -- 
1.Object.keys ()
2.for--in looop

const obj = {
  fName: "Nishat",
  mName: "Hasan",
  lName: "Muktar",
  fullName() {
    console.log(`${this.fNamename} ${this.mName} ${this.lName}`);
  },
};

// console.log(Object.keys(obj));
for (let property in obj) {
  console.log(property); //--for show all properties //--
  console.log(obj[property]) // --for show all properties value --//
} */

/* --6.--getters & setters (object accessors) --*/
/* // --getters
const obj = {
  name: "nishat hasan",
  age: 21,
  get: function() {
      return this.name;
  }
};
const name = obj.get();
console.log(name); */

/* // --setters --//
// --way-1
const obj = {
  name: "",
  set: function (lang) {
    this.name = lang;
  },
};
obj.set = "Nishat hasan";
console.log(obj.name); */

/* //  way-2
const obj2 = {
  name: "",
  set lang(lang) {
    this.name = lang;
  },
};
obj2.lang = "Nishat Hasan Muktar";
console.log(obj2.name); */
