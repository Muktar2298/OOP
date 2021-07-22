function Books(
  bookName = "",
  authorName = "",
  bookPrice = 0,
  pageNumber = 0,
  publisher = "",
  publishedYear = 2015
) {
  // console.log(this);
  this.bookName = bookName;
  this.authorName = authorName;
  this.bookPrice = bookPrice;
  this.pageNumber = pageNumber;
  this.publisher = publisher;
  this.publishedYear = publishedYear;
}
// --Book1 Object --//
const book1 = new Books(
  "JavaScript",
  "Jhankhar Mahbub",
  250,
  300,
  function () {
    console.log(this.bookName + " " + this.authorName);
  },
  2010
);
// --Book2 Object --//
const book2 = new Books(
  "Python Learner",
  "Sumit Sha",
  250,
  300,
  function () {
    console.log(this.bookName + " " + this.authorName);
  },
  2015
);
//   --Book3 Object --//
const book3 = new Books(
  "Data Structure",
  "Tamim Shahariar Subin",
  350,
  450,
  function () {
    console.log(this.bookName + " " + this.authorName);
  }
);

/* //--assing all object into a array --//
const arr = [book1, book2, book3];
// find all element --//
arr.forEach((obj) => {
//   console.log(obj);
  //   console.log(obj.bookName);
});
 */
for (let variable in book3) {
  //   console.log("Propertries : " + variable); //--for accesing the property --//
  //   console.log(book3[ variable]); //--for accesing the property value --//
  console.log(`key : ${variable} Value: ${book3[variable]}`); //--show property(key) & value together --//
}

