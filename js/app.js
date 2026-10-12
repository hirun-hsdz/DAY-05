console.log("hello");

//add local storage

// localStorage.setItem("name", "hirun");
localStorage.setItem("age","21");
// localStorage.setItem("city","colombo");

//remove item from local storagelocalStorage.removeItem("age");


//deta read from local storage

let name = localStorage.getItem("name");
let age = localStorage.getItem("age");
let city = localStorage.getItem("city");

console.log(name,age,city);

