// --Factory function --//
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
console.log(person1,person2);