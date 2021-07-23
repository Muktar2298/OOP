// --constructor function --//
function Person(name, age){
    // console.log(this);
    this.name = name;
    this.age = age;
    this.eat = function(){
        console.log(`${this.name} is eating  food`);
    };
    this.sleep = function(){
        console.log(`${this.name} is sleeping`);
    }
}

const person1 = new Person("nishat",20);
const person2 = new Person("nishat",21);
console.dir(person1);
console.dir(person2);