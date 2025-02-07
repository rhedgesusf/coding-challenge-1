///////////////////////
// Task 1: Variables //
///////////////////////

console.log('--------------------------------------');
console.log('Task 1: Variables');

let employeeName = "Bill Miller";
const employeeID = 123;
var isActive = true;

console.log("employeeName", employeeName, "type", typeof employeeName);
console.log("employeeID", employeeID, "type", typeof employeeID);
console.log("isActive", isActive, "type", typeof isActive);

//////////////////////////////////
// Task 2: Primitive Data Types //
//////////////////////////////////

console.log('--------------------------------------');
console.log('Task 2: Primitive Data Types');

let productName = "Cup";
const productPrice = 4.64;
var isAvailable = true;

console.log("productName", productName, "type", typeof productName);
console.log("productPrice", productPrice, "type", typeof productPrice);
console.log("isAvailable", isAvailable, "type", typeof isAvailable);

//////////////////////////////
// Task 3: Number Data Type //
//////////////////////////////

console.log('--------------------------------------');
console.log('Task 3: Number Data Type');

let accountBalance = 1500;
console.log("Initial Value", accountBalance);

accountBalance = accountBalance + 50;
console.log("adding 50:", accountBalance);

accountBalance = accountBalance - 100;
console.log("subtracting 100:", accountBalance);

accountBalance = accountBalance * 1.5;
console.log("multiplying by 1.5:", accountBalance);

accountBalance = accountBalance / 10;
console.log("divided by 10:", accountBalance);

///////////////////////////////
// Task 4: String Data Type ///
///////////////////////////////

console.log('--------------------------------------');
console.log('Task 4: String Data Type');

let customerName = "James Randall";

let welcomeMessage = "Welcome " + customerName;
console.log(welcomeMessage);

////////////////////////////////
// Task 5: Boolean Data Type ///
////////////////////////////////

console.log('--------------------------------------');
console.log('Task 5: Boolean Data Type');


let username = "admin";
let password = "1234";

let isLoggedIn = username === "admin" && password === "1234";
console.log("This should be true", isLoggedIn);

isLoggedIn = username === "admin" && password === "1111";
console.log("This should be false", isLoggedIn);

