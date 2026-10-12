// console.log("hello");

// //add local storage

// // localStorage.setItem("name", "hirun");
// //  localStorage.setItem("age","21");
// // localStorage.setItem("city","colombo");

// //remove item from local storagelocalStorage.removeItem("age");


// //deta read from local storage

// // let name = localStorage.getItem("name");
// // let age = localStorage.getItem("age");
// // let city = localStorage.getItem("city");

// // console.log(name,age,city);

// //Object to store data in local storage

// let customer = [{
//     name: "Hansaka",
//     age: 25,
//     isMarried: true,
// },
// {
//     name: "Nuwan",
//     age: 30,
//     isMarried: false,
// },
// {
//     name: "Kumara",
//     age: 35,
//     isMarried: true,
// }];



// // localStorage.clear();

// //1st step: convert object to string
// let customerString = JSON.stringify(customer);

// //2nd step: store string in local storage
// localStorage.setItem("customer", customerString); 

// //------get data from local storage

// //1st step: get string from local storage
// let getCustomerString = localStorage.getItem("customer");

// //2nd step: convert string to object
// let getCustomerObject = JSON.parse(getCustomerString);

// console.log(getCustomerObject);



//---------------------------------------------------------------------------------

function addCustomer() {
    alert(" added successfully");
}

function searchCustomer() {
    alert(" searched successfully");
}

function deleteCustomer() {
    alert(" delete successfully");
}

function clearCustomer() {
    alert(" clear successfully");
}

function loadTable() {
    alert(" table loaded successfully");
}