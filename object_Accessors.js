/* // 1.--getter (get()) --//
const obj = {
  name: "nishat",
  age: 21,
  get old() {
    return this.age;
  },
};
// console.log(obj.old);

//2. --setter (set()) --//
const obj2 = {
  names: "",
  set name(name) {
    this.names = name;
  },
  age: 21,
};

obj2.name = "Nishat Hasan Muktar";
// console.log(obj2.names);

// 3.--Object.defineProperty() --//
const obj3 = {};
Object.defineProperty(obj3, "name", {
  value: "Nishat Hasan Muktar",
});
console.log(obj3.name);
 */

/* // 4.--Object.defineProperties() --//
const obj = {};
Object.defineProperties(obj, {
  name: {
    value: "Ojhora Pius Ripu",
  },
  age: {
    value: 21,
  },
});
console.log(obj.name);
 */


