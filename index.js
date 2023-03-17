// Write your solution in this file!
var customerName = "bob"; //declaring a global variable
function upperCaseCustomerName() {  // function to uppercase the global variable
    customerName = customerName.toUpperCase();  
}

function setBestCustomer() { // function to declare a global variable and assign it a value
    bestCustomer = "not bob";
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "bob";
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "poor bob";
}

