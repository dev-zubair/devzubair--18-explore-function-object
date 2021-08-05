// --------------------
// ADDITION MULTIPLE PARAMETERS 
// -------------------- 
function addTwoNumbers (number1, number2) {
    console.log(number1, number2);
    // console.log(number2);
    var total = number1 + number2
    return total;
}
var firstNumber = 35;
var secondNumber = 50;
var result = addTwoNumbers(firstNumber, secondNumber);
console.log('total result', result);

// --------------------
// MULTIPLY PARAMETERS 
// -------------------- 
function multiplyNumber (number3, number4){
    console.log(number3, number4);
    var totalNumber = number3 * number4;
    return totalNumber;
}

var number3 = 5;
var number4 = 4;
var totalNumber = multiplyNumber(number3, number4);
console.log('Final Numner', totalNumber);

// --------------------
// SUBTRACT PARAMETERS 
// -------------------- 
function biyogNumber(biyog1, biyog2){
    console.log(biyog1, biyog2);
    var totalBiyog = biyog1 - biyog2;
    return totalBiyog;
}

var biyog1 = 80;
var biyog2 = 60;
var totalBiyog = biyogNumber(biyog1, biyog2);
console.log('The final result of your Byog is', totalBiyog);

// --------------------
// DIVITION PARAMETERS 
// -------------------- 
function divitionNumber(division1, division2){
    console.log(division1, division2);
    var totalDivision = division1 / division2;
    return totalDivision;
}
var division1 = 180;
var division2 = 20;
var finalDivision = divitionNumber(division1, division2);
console.log('This the final Division', finalDivision);

