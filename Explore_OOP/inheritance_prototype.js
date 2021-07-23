/* // 1.Normal way of  Inheritance --//
function Person(){
    this.name  = "Nishat Hasan Muktar";
}
function Teacher(){
Person.call(this);   //--inherit Person methode--//
this.subject = "JavaScript";
}

const teacher = new Teacher();
console.log(teacher);
// console.log(teacher.name); */

// 2.Protype way of Inheritance --//
function Person(name) {
  this.name = name;
}
// --defina a methode inside Person function protype --//
Person.prototype.print = function () {
  console.log("Hello", this.name);
};
Person.prototype.another = function () {
  console.log("Another", this.name);
};

function Student(name, id) {
  Person.call(this, name);
  this.id = id;
}

// Student.prototype = Object.create(Person.prototype); //--one way for doing Prototype Inheritance --//
Object.setPrototypeOf(Student.prototype, Person.prototype); //--another way for Prototype Inheritance --//
// Student.prototype.constructor = Student; //--Constuctor override ta dur korar jonno --//

const student = new Student("Nishat Hasan Muktar", 2298);
console.log(student);
