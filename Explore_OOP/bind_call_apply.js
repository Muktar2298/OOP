function calculate(a, b) {
  console.log("Hello =>", this.name);
  console.log(a + b);
}

const obj1 = {
  name: "Nishat Hasan Muktr",
};
const obj2 = {
  name: "Nusrat Jahan Tanha",
};

/* //1. --bind() --//
const binded1 = calculate.bind(obj1,10,20);
const binded2 = calculate.bind(obj2,10,20);
binded1();
binded2(); */

/* // --2.call() --//
calculate.call(obj1,10,20);
calculate.call(obj2,10,20); */

// --3.apply() --//
calculate.apply(obj1, [10, 20]);
calculate.apply(obj2, [10, 20]);
