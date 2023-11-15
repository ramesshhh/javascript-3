/*
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);
*/

console.log("2" < 1);  // converts into number automatically
console.log("02" < 1); // converts into number automatically

/* The reason is that an equality check == and comparison >, <, >=, <= work differently,
Comparison convert null to a number , treating it as 0.
That's why "3" is null >=0 is true and "1" null > 0 is false  */
console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // true

console.log(undefined > 0);  // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

console.log("2" == 2);  // true
console.log("2" === 2); // false
