function CreatePerson(name, age) {
  this.name = name;
  this.age = age;
  this.calculate = function (a, b) {
    console.log(a + b);
  };
  this.phone = "0160109199";
  this.email = "muktar15-2298@gmail.com";
}
const person = new CreatePerson("Nishat", 21);
// console.log(person);
for (let key in person) {
  console.log(key, person["Key Value",key]);
}

// --using Object.keys() to find out all the keys(propertys) from the object --//
const keys = Object.keys(person);
console.log(keys);
function CreatePerson(name, age) {
  this.name = name;
  this.age = age;
  calculate = function (a, b) {
    console.log(a + b);
  };
}
const person = new CreatePerson("Nishat", 21);