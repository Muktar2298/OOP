function Circle(radius) {
  this.radius = radius;
  this.defaulLocation = { x: 0, y: 0 };
  this.computeDefaultLocation = function () {
    //   this.defaulLocation;
    console.log("COMPUTE OBJECT METHODE");
  };
  this.draw = function () {
    this.computeDefaultLocation();
    console.log("Draw");
  };
}
const circle = new Circle(1);
// console.log(circle); //--circle object --//
circle.draw(); //--abstraction (show particular or essential information,but baki information or property gulu hide thakbe ..keno na sei gulu amra acces kori nai(hide unnecessery information)) ()
