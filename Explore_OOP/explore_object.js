// --Object Creating --//
/* const obj1 = {};
const obj2 = new Object();
console.log(obj2); */

/* // --Property Accessors --//
const book = {
  name: "Python learner",
  author: "Jhankar Mahbub",
  page: 355,
  publisher: function () {
    return (this.name + " : " + this.author);
  }
};
console.log(book.publisher());  //--Using dot notation --//
console.log('Author Name : ' + book['author']); //--Using brackets notation --// */

// 3. Explore Object --(i).adding property (ii).Deleting Property (iii).Updating Property  //
const book = {
  name: "Python learner",
  author: "Jhankar Mahbub",
  page: 355,
  publisher: function () {
    return this.name + " : " + this.author;
  },
};

//--adding property --//
book.publishedYear = 2019;   //--way one to adding property --//
// --deleting property --//
delete book.page;
console.log(book);
