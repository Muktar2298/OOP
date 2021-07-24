// --prototype --//
/* function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.print = function () {
  consonle.log(`Student Name is :${this.name}`);
};

const obj1 = new Person("Nishat Hasan Muktar", 21);
const obj2 = new Person("Nishat Hasan Muktar", 21);
console.log(obj1,obj2); */

// --prototype inheritance --//
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.print = function () {
  consonle.log(`Student Name is :${this.name}`);
};

function Student(name, age) {
  Person.call(this, name, age);
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

const obj1 = new Student("Nishat Hasan Muktar", 21);
console.log(obj1);
