/* //1--constructor function for creating multiple objcets --//
function Person(name,age) {
    this.name = name;
    this.age = age;
    this.print = function() { 
        console.log("Hello",this.name);
    }
}
const person1 = new Person("nishat",20);
const person2 = new Person("hasan",21);
const person3  = new Person("muktar",22);
console.log(person1,person2,person3); */

/* //2 --Using prototype for define print methode for attach or add into a Prototype Object(Prototype Property) --//
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.print = function () {
  console.log("Hello", this.name);
};
const person1 = new Person("nishat", 20);
const person2 = new Person("hasan", 21);
const person3 = new Person("muktar", 22);
console.log(person1, person2, person3);
// console.log(person1.print()); //--because we attach print methode into Prototype --// */


//--3. define multiple properties & methode into a prototype --//
function Person(name,age) {
    this.name = name;
    this.age = age;
    
}
Person.prototype = {
    email:"muktar12456@gmail.com",
    draw:function(){
        console.log("draw")
    }
}
const person1 = new Person("nishat",20);
const person2 = new Person("hasan",21);
console.log(person1,person2);