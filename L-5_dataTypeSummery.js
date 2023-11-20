// Primitive

// 7 Types: String , Number , Boolean , Null , Undefined , Symbole , BigInt


// Reference type / Non Primitive

// 3 type: Arrays , Object , Function

// JS is a dynamic or static type language: JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.


//  ====================  Memory Allocations  ===========================

// Stack Memory - primitive type - copy of code

// Heap Memory - non-primitive type or reference type - changes made in original code

let myYoutubeName = "Ramesh Jha";

let anotherName = myYoutubeName;
anotherName = "Bittu";

console.log(myYoutubeName);
console.log(anotherName);