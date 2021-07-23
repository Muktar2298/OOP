// --Creating a Object --//
/* const object = {
  name: "nishat",
  age: 21,
  calculate: function (a, b) {
    return a + b;
  },
};
const result = object.calculate(1, 2);
console.log(result); */

/* // --Factory function --//
function createPerson(name, age) {
  return {
    name,
    age,
    calculate: function (a, b) {
      return a + b;
    }
  }
}

let person1 = createPerson("Nishat",21);
let person2 = createPerson("Nishat",21);
console.log(person1,person2); */

// --Constructor function --//
function CreatePerson(name, age) {
  this.name = name;
  this.age = age;
  this.calculate = function (a, b) {
    console.log(a + b);
  };
}
const person = new CreatePerson("Nishat", 21);
// const person_1 = new CreatePerson("Hasan", 21);
// const person_2 = new CreatePerson("Mukatar", 20);
// console.log(person_1, person_2);

// --Adding & updating & deleting --a Property in Object ---//
// --adding --//
person.lastName = "Muktar";
person.middleName = "Hasan";
// console.log(person);

// --updating --//
person.age = "Hasan";
console.log(person);

// --deleting --//
delete person.age;
console.log(person);
