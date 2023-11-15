let score = 33;

console.log(typeof score);
console.log(typeof(score));

let score1 = "33";
console.log(typeof score1);

let valueInNumber = Number(score1);
console.log(typeof valueInNumber);

let score2 = "33abc";
console.log(typeof score2);
let valueInNumber1 = Number(score2);
console.log(typeof valueInNumber1);
console.log(valueInNumber1);  // value is NaN

let score3 = null;
console.log(typeof score3);
let valueInNumber2 = Number(score3);
console.log(typeof valueInNumber2);
console.log(valueInNumber2); // will return 0

let score4 = undefined;
console.log(typeof score4);
let valueInNumber3 = Number(score4);
console.log(typeof valueInNumber3);
console.log(valueInNumber3);  // will return NaN

let score5 = "Ramesh";
console.log(typeof score5);
let valueInNumber4 = Number(score5);
console.log(typeof valueInNumber4);
console.log(valueInNumber4);  // will return NaN

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let loggedIn = 1;
let booleanIsLoggedIn = Boolean(loggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 1 = true ; 0 = false
// "" => false ; "ramesh" => true

let loggedIn1 = "ramesh";
let booleanIsLoggedIn1 = Boolean(loggedIn1);
console.log(typeof booleanIsLoggedIn1);
console.log(booleanIsLoggedIn1);

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);  // value is converted into string
console.log(stringNumber); // but value is still 33


//  ******************  Operations **************************  //


let value = 3;
let negValue = -value;
console.log(negValue); // value converted to "negative"

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);  // 2 modulus 2 , to get moduluss
console.log(2**2);  // 2 to the power 2


let str1 = "Hello";
let str2 = " Ramesh";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);  // 122 => JS all conversion to string
console.log(1 + 2 + "2");  // 32 => JS 1st,2nd => number and 3rd=>string

console.log(+true); // 1
console.log(true);  // true

let gameCounter = 100;
++gameCounter;  // returns the value after incrementing.
console.log(gameCounter);

let gameCounter1 = 100;
gameCounter1++;  // returns the value before incrementing.
console.log(gameCounter1);
